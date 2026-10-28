import type { Metadata } from "next";
import type { ReactNode } from "react";
import { SITE_ICON_LINKS } from "@/lib/site";

// Single owner of the favicon metadata: every route (root page, 404, locales) inherits it.
export const metadata: Metadata = { icons: SITE_ICON_LINKS };

// The real root layout (<html>, <body>) lives in app/[locale]/layout.tsx
// so that <html lang> matches the active locale in the static export.
export default function RootLayout({ children }: { children: ReactNode }): ReactNode {
  return children;
}
