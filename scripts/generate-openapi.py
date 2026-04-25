#!/usr/bin/env python3
"""Convert the Intraverse Postman collection into OpenAPI 3.0 (YAML + JSON).

Approach:
  - Walk the Postman collection tree, treating top-level folders as OpenAPI tags.
  - Normalize sandbox URLs to a single server (https://dev.intraversewebservices.com/api).
  - Translate each request: method, path, params (path/query/header), JSON body
    schema (inferred from the example), and an example response from the first
    saved response if available.
  - Strip auth/host headers per OpenAPI conventions; declare bearerAuth globally.
"""
import json
import re
import sys
from collections import OrderedDict

SRC = sys.argv[1] if len(sys.argv) > 1 else "/tmp/postman.json"
OUT_JSON = sys.argv[2] if len(sys.argv) > 2 else "/dev-server/public/openapi.json"
OUT_YAML = sys.argv[3] if len(sys.argv) > 3 else "/dev-server/public/openapi.yaml"

SANDBOX_HOSTS = (
    "qa.intraversewebservices.com",
    "dev.intraversewebservices.com",
)
CANONICAL_BASE = "https://dev.intraversewebservices.com/api"

# Headers that OpenAPI handles via servers / security and shouldn't be redeclared.
HIDDEN_HEADERS = {
    "host",
    "authorization",
    "content-length",
    "accept-encoding",
    "user-agent",
    "connection",
    "postman-token",
    "cache-control",
}

with open(SRC) as f:
    coll = json.load(f)


# ---------- helpers ---------------------------------------------------------

def normalize_path(raw: str) -> tuple[str, list[dict]]:
    """Return (openapi_path, [path_param_objects])."""
    if not raw:
        return "/", []
    # Strip protocol + host
    m = re.match(r"^https?://[^/]+(.*)$", raw)
    path = m.group(1) if m else raw
    # Drop query string
    path = path.split("?", 1)[0]
    # Strip /api prefix (it's part of the server URL now)
    if path.startswith("/api/"):
        path = path[len("/api"):]
    elif path == "/api":
        path = "/"
    if not path.startswith("/"):
        path = "/" + path
    # Convert :param -> {param}
    params = []
    def repl(match):
        name = match.group(1)
        params.append({
            "name": name,
            "in": "path",
            "required": True,
            "schema": {"type": "string"},
            "description": f"Path parameter `{name}`.",
        })
        return "{" + name + "}"
    path = re.sub(r":([A-Za-z_][A-Za-z0-9_]*)", repl, path)
    return path, params


def infer_schema(value):
    """Recursively infer a JSON Schema fragment from an example value."""
    if value is None:
        return {"type": "string", "nullable": True}
    if isinstance(value, bool):
        return {"type": "boolean", "example": value}
    if isinstance(value, int):
        return {"type": "integer", "example": value}
    if isinstance(value, float):
        return {"type": "number", "example": value}
    if isinstance(value, str):
        out = {"type": "string", "example": value}
        if re.match(r"^\d{4}-\d{2}-\d{2}$", value):
            out["format"] = "date"
        elif re.match(r"^\d{4}-\d{2}-\d{2}T", value):
            out["format"] = "date-time"
        return out
    if isinstance(value, list):
        if not value:
            return {"type": "array", "items": {}}
        return {"type": "array", "items": infer_schema(value[0])}
    if isinstance(value, dict):
        props = OrderedDict()
        for k, v in value.items():
            props[k] = infer_schema(v)
        return {"type": "object", "properties": props}
    return {}


def safe_json_loads(s: str):
    if not s or not s.strip():
        return None
    candidates = [s]
    # Strip // line comments and /* ... */ block comments (JSON5-ish)
    no_line = re.sub(r"//[^\n\r]*", "", s)
    no_block = re.sub(r"/\*.*?\*/", "", no_line, flags=re.DOTALL)
    candidates.append(no_block)
    # Strip trailing commas
    candidates.append(re.sub(r",\s*([}\]])", r"\1", no_block))
    for c in candidates:
        try:
            return json.loads(c)
        except (json.JSONDecodeError, ValueError):
            continue
    return None


# Cap saved response examples to keep the spec downloadable.
MAX_RESPONSE_BYTES = 8 * 1024  # 8KB per example


def truncate_example(example):
    """Trim large arrays / strings inside a JSON response example."""
    if isinstance(example, list):
        if len(example) > 2:
            return [truncate_example(example[0]), "... (truncated; see Postman collection for full payload)"]
        return [truncate_example(v) for v in example]
    if isinstance(example, dict):
        return {k: truncate_example(v) for k, v in example.items()}
    if isinstance(example, str) and len(example) > 500:
        return example[:500] + "... (truncated)"
    return example



def operation_id(method: str, path: str) -> str:
    parts = [p for p in path.strip("/").split("/") if p]
    cleaned = []
    for p in parts:
        if p.startswith("{") and p.endswith("}"):
            cleaned.append("By" + p[1:-1].capitalize())
        else:
            cleaned.append(re.sub(r"[^A-Za-z0-9]", "", p).capitalize() or "Root")
    return method.lower() + "".join(cleaned) or method.lower() + "Root"


def header_params(headers):
    out = []
    for h in headers or []:
        if h.get("disabled"):
            continue
        name = h.get("key", "")
        if not name or name.lower() in HIDDEN_HEADERS:
            continue
        if name.lower() == "content-type":
            continue  # captured by requestBody
        out.append({
            "name": name,
            "in": "header",
            "required": False,
            "schema": {"type": "string", "example": h.get("value", "")},
            "description": h.get("description") or f"`{name}` header.",
        })
    return out


def query_params(url):
    out = []
    if not isinstance(url, dict):
        return out
    for q in url.get("query", []) or []:
        if q.get("disabled"):
            continue
        name = q.get("key", "")
        if not name:
            continue
        out.append({
            "name": name,
            "in": "query",
            "required": False,
            "schema": {"type": "string", "example": q.get("value", "")},
            "description": q.get("description") or f"`{name}` query parameter.",
        })
    return out


def build_request_body(req):
    body = req.get("body") or {}
    mode = body.get("mode")
    if mode == "raw":
        raw = body.get("raw", "")
        opts = body.get("options", {}).get("raw", {})
        lang = opts.get("language", "json")
        if lang == "json":
            example = safe_json_loads(raw)
            if example is None:
                return None
            return {
                "required": True,
                "content": {
                    "application/json": {
                        "schema": infer_schema(example),
                        "example": example,
                    }
                },
            }
        return {
            "required": True,
            "content": {
                "text/plain": {
                    "schema": {"type": "string"},
                    "example": raw,
                }
            },
        }
    if mode == "urlencoded":
        props = OrderedDict()
        example = OrderedDict()
        for f in body.get("urlencoded", []) or []:
            if f.get("disabled"):
                continue
            props[f["key"]] = {"type": "string"}
            example[f["key"]] = f.get("value", "")
        return {
            "required": True,
            "content": {
                "application/x-www-form-urlencoded": {
                    "schema": {"type": "object", "properties": props},
                    "example": dict(example),
                }
            },
        }
    if mode == "formdata":
        props = OrderedDict()
        for f in body.get("formdata", []) or []:
            if f.get("disabled"):
                continue
            t = f.get("type", "text")
            if t == "file":
                props[f["key"]] = {"type": "string", "format": "binary"}
            else:
                props[f["key"]] = {"type": "string", "example": f.get("value", "")}
        return {
            "required": True,
            "content": {
                "multipart/form-data": {
                    "schema": {"type": "object", "properties": props},
                }
            },
        }
    return None


def build_responses(item):
    responses = OrderedDict()
    for sample in item.get("response", []) or []:
        code = str(sample.get("code", 200))
        body_text = sample.get("body") or ""
        example = safe_json_loads(body_text)
        content = {}
        if example is not None:
            trimmed = truncate_example(example)
            content["application/json"] = {
                "schema": infer_schema(trimmed),
                "example": trimmed,
            }
        elif body_text:
            content["text/plain"] = {
                "schema": {"type": "string"},
                "example": body_text[:2000],
            }
        responses[code] = {
            "description": sample.get("status") or sample.get("name") or "Response",
            **({"content": content} if content else {}),
        }
    if not responses:
        responses["200"] = {"description": "Successful response"}
    return responses


def description_of(item, req):
    parts = []
    folder_desc = item.get("__folder_desc__")
    if folder_desc:
        parts.append(folder_desc)
    d = req.get("description")
    if isinstance(d, dict):
        d = d.get("content")
    if d:
        parts.append(d)
    return "\n\n".join(parts).strip() or None


# ---------- walk -----------------------------------------------------------

paths: dict = OrderedDict()
tags: list = []
seen_tags = set()
seen_op_ids = set()


def add_tag(name, description=None):
    if name in seen_tags:
        return
    seen_tags.add(name)
    tag = {"name": name}
    if description:
        # Strip HTML
        description = re.sub(r"<[^>]+>", " ", description)
        description = re.sub(r"\s+", " ", description).strip()
        if description:
            tag["description"] = description[:500]
    tags.append(tag)


def walk(items, current_tag=None):
    for it in items:
        if "item" in it:
            tag_name = it["name"]
            d = it.get("description")
            if isinstance(d, dict):
                d = d.get("content")
            add_tag(tag_name, d)
            walk(it["item"], current_tag=tag_name)
            continue

        req = it.get("request") or {}
        if not isinstance(req, dict):
            continue
        method = (req.get("method") or "GET").lower()
        url = req.get("url") or {}
        raw = url.get("raw", "") if isinstance(url, dict) else url
        path, path_params = normalize_path(raw)

        # Build operation
        params = path_params + query_params(url) + header_params(req.get("header"))
        # Dedupe params by (name,in)
        seen = set()
        deduped = []
        for p in params:
            k = (p["name"], p["in"])
            if k in seen:
                continue
            seen.add(k)
            deduped.append(p)

        op_id_base = operation_id(method, path)
        op_id = op_id_base
        i = 2
        while op_id in seen_op_ids:
            op_id = f"{op_id_base}{i}"
            i += 1
        seen_op_ids.add(op_id)

        operation = {
            "tags": [current_tag] if current_tag else [],
            "summary": it.get("name", ""),
            "operationId": op_id,
            "parameters": deduped,
            "responses": build_responses(it),
        }
        desc = description_of(it, req)
        if desc:
            operation["description"] = desc
        if method in {"post", "put", "patch", "delete"}:
            rb = build_request_body(req)
            if rb:
                operation["requestBody"] = rb
        if not operation["parameters"]:
            operation.pop("parameters")

        paths.setdefault(path, OrderedDict())[method] = operation


walk(coll["item"])

# ---------- assemble ------------------------------------------------------

info_desc = coll["info"].get("description") or ""
if isinstance(info_desc, dict):
    info_desc = info_desc.get("content", "")
info_desc = re.sub(r"<[^>]+>", " ", info_desc)
info_desc = re.sub(r"\s+", " ", info_desc).strip()

openapi = OrderedDict()
openapi["openapi"] = "3.0.3"
openapi["info"] = {
    "title": "Intraverse API",
    "version": "1.0.0",
    "description": (
        "OpenAPI 3.0 specification for the Intraverse API — flights, payments, "
        "customers, and webhooks. Generated from the official Postman collection. "
        "Authoritative reference: https://documenter.getpostman.com/view/17671608/2s9Yyqhgtj"
    ),
    "contact": {"name": "Intraverse Developer Support", "url": "https://intraverse.africa/docs"},
    "license": {"name": "Proprietary"},
}
openapi["servers"] = [
    {"url": CANONICAL_BASE, "description": "Sandbox"},
]
openapi["security"] = [{"bearerAuth": []}]
openapi["tags"] = tags
openapi["paths"] = paths
openapi["components"] = {
    "securitySchemes": {
        "bearerAuth": {
            "type": "http",
            "scheme": "bearer",
            "bearerFormat": "JWT",
            "description": (
                "Bearer token issued by `POST /main/v1/apikey/token`. Generate an API "
                "key via the Intraverse dashboard, then exchange it for a short-lived "
                "JWT."
            ),
        }
    }
}

# ---------- write JSON ----------------------------------------------------
with open(OUT_JSON, "w") as f:
    json.dump(openapi, f, indent=2)

# ---------- write YAML ---------------------------------------------------
try:
    import yaml  # type: ignore
except ImportError:
    print("ERROR: PyYAML required. Install with: pip install pyyaml", file=sys.stderr)
    sys.exit(1)


# Preserve insertion order in YAML output
class _OrderedDumper(yaml.SafeDumper):
    pass


def _dict_repr(dumper, data):
    return dumper.represent_mapping("tag:yaml.org,2002:map", data.items())


_OrderedDumper.add_representer(OrderedDict, _dict_repr)
_OrderedDumper.add_representer(dict, _dict_repr)

with open(OUT_YAML, "w") as f:
    f.write("# Intraverse API — OpenAPI 3.0 specification\n")
    f.write("# Generated from the official Postman collection.\n")
    f.write("# Source: https://documenter.getpostman.com/view/17671608/2s9Yyqhgtj\n")
    yaml.dump(
        openapi,
        f,
        Dumper=_OrderedDumper,
        sort_keys=False,
        default_flow_style=False,
        allow_unicode=True,
        width=100,
    )

# ---------- summary ------------------------------------------------------
total_ops = sum(len(v) for v in paths.values())
print(f"✅ Wrote {OUT_YAML} and {OUT_JSON}")
print(f"   Paths: {len(paths)} | Operations: {total_ops} | Tags: {len(tags)}")
for t in tags:
    count = sum(
        1 for p in paths.values() for op in p.values()
        if t["name"] in (op.get("tags") or [])
    )
    print(f"   • {t['name']}: {count}")
