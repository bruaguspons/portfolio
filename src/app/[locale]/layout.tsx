import type { ReactNode } from "react";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { cn } from "@/lib/utils";
import { routing } from "@/i18n/routing";
import NextIntlProvider from "@/app/NextIntlProvider";

import Header from "@/components/layout/Header/Header";
import GreyBg from "@/components/layout/GreyBg";
import SocialMediaPanel from "@/components/layout/SocialMediaPanel";
import InfoTag from "@/components/layout/InfoTag";
import Footer from "@/components/layout/Footer";
import AOSProvider from "@/components/ui/AOSProvider";

export function generateStaticParams(): { locale: string }[] {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}): Promise<ReactNode> {
  const { locale } = await params;

  if (!routing.locales.includes(locale as typeof routing.locales[number])) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <NextIntlProvider messages={messages} locale={locale}>
      <AOSProvider>
        <GreyBg />
        <Header headerHeight="h-16" />
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
  );
}
