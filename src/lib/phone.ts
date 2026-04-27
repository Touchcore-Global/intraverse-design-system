/**
 * Nigeria-aware phone helpers.
 *
 * Accepts the common ways Nigerians type their number:
 *   - 0803 123 4567       (local, leading 0)
 *   - 803 123 4567        (without leading 0)
 *   - +234 803 123 4567   (international)
 *   - 234 803 123 4567    (international, no plus)
 *
 * Normalizes to E.164: +2348031234567 (WhatsApp-ready).
 */

const NG_COUNTRY_CODE = "234";

/** Strip everything except digits and a single leading "+". */
export function stripNonDigits(value: string): string {
  const trimmed = value.trim();
  const hasPlus = trimmed.startsWith("+");
  const digits = trimmed.replace(/\D/g, "");
  return hasPlus ? `+${digits}` : digits;
}

/**
 * Try to convert raw user input into E.164 (+234XXXXXXXXXX) for Nigerian numbers.
 * Returns null when the number cannot be confidently interpreted as a valid
 * Nigerian mobile number.
 */
export function toE164Nigeria(raw: string): string | null {
  if (!raw) return null;
  let digits = stripNonDigits(raw).replace(/^\+/, "");

  // Already includes country code
  if (digits.startsWith(NG_COUNTRY_CODE)) {
    digits = digits.slice(NG_COUNTRY_CODE.length);
  } else if (digits.startsWith("0")) {
    digits = digits.slice(1);
  }
  // else: assume the user typed the 10-digit subscriber portion directly

  // Nigerian mobile subscriber numbers are 10 digits and start with 7, 8, or 9.
  if (!/^[789]\d{9}$/.test(digits)) return null;

  return `+${NG_COUNTRY_CODE}${digits}`;
}

/**
 * Pretty format for display while the user is typing.
 * Returns the input as-is for non-Nigerian / unrecognized numbers so we don't
 * fight the user.
 *
 * Examples:
 *   "08031234567"      -> "+234 803 123 4567"
 *   "8031234567"       -> "+234 803 123 4567"
 *   "+2348031234567"   -> "+234 803 123 4567"
 *   "0803123"          -> "+234 803 123"   (partial, still helpful)
 */
export function formatNigeriaPhoneInput(raw: string): string {
  if (!raw) return "";
  const stripped = stripNonDigits(raw);
  if (!stripped || stripped === "+") return raw;

  let digits = stripped.replace(/^\+/, "");
  let hasCountry = false;

  if (digits.startsWith(NG_COUNTRY_CODE)) {
    digits = digits.slice(NG_COUNTRY_CODE.length);
    hasCountry = true;
  } else if (digits.startsWith("0")) {
    digits = digits.slice(1);
    hasCountry = true;
  } else if (/^[789]/.test(digits) && digits.length <= 10) {
    // Looks like a NG subscriber number typed without country code or leading 0
    hasCountry = true;
  }

  if (!hasCountry) {
    // Not recognizably Nigerian - leave it alone so international numbers work.
    return raw;
  }

  // Cap subscriber portion to 10 digits
  digits = digits.slice(0, 10);

  // Group as XXX XXX XXXX
  const part1 = digits.slice(0, 3);
  const part2 = digits.slice(3, 6);
  const part3 = digits.slice(6, 10);
  const grouped = [part1, part2, part3].filter(Boolean).join(" ");

  return `+${NG_COUNTRY_CODE}${grouped ? ` ${grouped}` : ""}`;
}

/** True when the input normalizes to a valid Nigerian mobile number. */
export function isValidNigeriaPhone(raw: string): boolean {
  return toE164Nigeria(raw) !== null;
}
