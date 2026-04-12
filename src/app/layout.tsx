import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";
import {
  SITE_URL,
  SITE_TITLE,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_OG_IMAGE,
  SITE_ICONS,
} from "@/lib/site";
import "./globals.css";
import "./index.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: SITE_TITLE,
    template: "%s | Bruno Pons",
  },

  description: SITE_DESCRIPTION,
  authors: [{ name: "Bruno Pons" }],

  alternates: {
    canonical: SITE_URL,
  },

  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    images: [{ url: SITE_OG_IMAGE, width: 1200, height: 630, alt: SITE_NAME }],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [SITE_OG_IMAGE],
  },

  icons: {
    icon: [
      { url: SITE_ICONS.default, type: "image/svg+xml" },
      { url: SITE_ICONS.dark, type: "image/svg+xml", media: "(prefers-color-scheme: dark)" },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f0f0f0" },
    { media: "(prefers-color-scheme: dark)", color: "#13151A" },
  ],
};

export default function RootLayout({ children }: { children: ReactNode }): ReactNode {
  return (
    <html className="dark scroll-smooth" suppressHydrationWarning>
      <body
        className={cn(
          montserrat.className,
          "antialiased flex min-h-screen flex-col text-neutral-50 bg-zinc-800"
        )}
      >
        {children}
      </body>
    </html>
  );
}
