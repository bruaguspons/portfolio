import type { Metadata } from "next";
import type { ReactNode } from "react";
import { routing } from "@/i18n/routing";
import { SITE_NAME, siteUrl } from "@/lib/site";

const DEFAULT_LOCALE_URL = siteUrl(`${routing.defaultLocale}/`);
// Path including basePath ("/portfolio/es/" in production), derived from the site URL.
const REDIRECT_TARGET = new URL(DEFAULT_LOCALE_URL).pathname;

export const metadata: Metadata = {
  title: SITE_NAME,
  alternates: { canonical: DEFAULT_LOCALE_URL },
};

// Static export has no server redirects, and redirect() would emit an error shell
// without lang/title. A plain meta refresh works without JavaScript.
export default function RootPage(): ReactNode {
  return (
    <html lang={routing.defaultLocale}>
      <head>
        <meta httpEquiv="refresh" content={`0; url=${REDIRECT_TARGET}`} />
      </head>
      <body>
        <a href={REDIRECT_TARGET}>{SITE_NAME}</a>
      </body>
    </html>
  );
}
