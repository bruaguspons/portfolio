import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { cn } from "@/lib/utils";
import { routing } from "@/i18n/routing";
import { montserrat } from "@/lib/fonts";
import {
  SITE_URL,
  SITE_NAME,
  SITE_OG_IMAGE,
  SITE_ICONS,
  OG_LOCALES,
} from "@/lib/site";
import NextIntlProvider from "@/components/providers/NextIntlProvider";

import Header from "@/components/layout/Header/Header";
import GreyBg from "@/components/layout/GreyBg";
import SocialMediaPanel from "@/components/layout/SocialMediaPanel";
import InfoTag from "@/components/layout/InfoTag";
import Footer from "@/components/layout/Footer";
import AOSProvider from "@/components/ui/AOSProvider";
import GrainientWithLoader from "@/components/ui/GrainientWithLoader";
import "../globals.css";

type Params = Promise<{ locale: string }>;

export function generateStaticParams(): { locale: string }[] {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "META" });
  const title = t("TITLE");
  const description = t("DESCRIPTION");
  const url = `${SITE_URL}${locale}/`;

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: title,
      template: "%s | Bruno Pons",
    },
    description,
    authors: [{ name: "Bruno Pons" }],
    alternates: {
      canonical: url,
      languages: Object.fromEntries(
        routing.locales.map((l) => [l, `${SITE_URL}${l}/`])
      ),
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      images: [{ url: SITE_OG_IMAGE, width: 1200, height: 630, alt: SITE_NAME }],
      locale: OG_LOCALES[locale],
      alternateLocale: routing.locales
        .filter((l) => l !== locale)
        .map((l) => OG_LOCALES[l]),
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [SITE_OG_IMAGE],
    },
    icons: {
      icon: [
        { url: SITE_ICONS.default, type: "image/svg+xml" },
        { url: SITE_ICONS.dark, type: "image/svg+xml", media: "(prefers-color-scheme: dark)" },
      ],
    },
  };
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f0f0f0" },
    { media: "(prefers-color-scheme: dark)", color: "#13151A" },
  ],
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Params;
}): Promise<ReactNode> {
  const { locale } = await params;

  if (!routing.locales.includes(locale as typeof routing.locales[number])) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className="dark scroll-smooth"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <body
        className={cn(
          montserrat.className,
          "antialiased flex min-h-screen flex-col text-neutral-50 bg-transparent"
        )}
      >
        <NextIntlProvider messages={messages} locale={locale}>
          <AOSProvider>
            <GrainientWithLoader />
            <GreyBg />
            <Header />
            <main
              className={cn(
                "relative z-10 flex grow flex-col items-start justify-center",
                "w-full px-[10vw]"
              )}
            >
              {children}
            </main>
            <SocialMediaPanel />
            <InfoTag />
            <Footer />
          </AOSProvider>
        </NextIntlProvider>
      </body>
    </html>
  );
}
