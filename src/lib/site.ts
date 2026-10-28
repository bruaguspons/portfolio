import type { Metadata } from "next";

export const SITE_URL =
  process.env.NODE_ENV === "production"
    ? "https://bruaguspons.github.io/portfolio"
    : "http://localhost:54321";
export const SITE_NAME = "Bruno Pons Portfolio";

export const OG_LOCALES: Record<string, string> = { es: "es_UY", en: "en_US" };

// Joins SITE_URL and a path with exactly one "/", whether or not the path starts with one.
export function siteUrl(path = ""): string {
  return `${SITE_URL}/${path.replace(/^\/+/, "")}`;
}

export const SITE_ICONS = {
  default: siteUrl("favicon.svg"),
  dark: siteUrl("favicon-dark.svg"),
};

export const SITE_ICON_LINKS: NonNullable<Metadata["icons"]> = {
  icon: [
    { url: SITE_ICONS.default, type: "image/svg+xml" },
    { url: SITE_ICONS.dark, type: "image/svg+xml", media: "(prefers-color-scheme: dark)" },
  ],
};

export const SITE_OG_IMAGE = siteUrl("image_preview_2026_2.png");
