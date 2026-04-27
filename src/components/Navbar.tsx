// The site-wide navigation now uses the V3 mega menu by default.
// This file re-exports NavbarV3 as Navbar so all existing imports
// (`import { Navbar } from "@/components/Navbar"`) automatically pick up V3.
export { NavbarV3 as Navbar } from "@/components/v3/NavbarV3";
