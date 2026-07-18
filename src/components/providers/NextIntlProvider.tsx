"use client";

import { NextIntlClientProvider } from "next-intl";
import { ReactNode, useEffect } from "react";

interface Props {
  children: ReactNode;
  messages: Record<string, unknown>;
  locale: string;
}

export default function NextIntlProvider({ children, messages, locale }: Props): ReactNode {
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return (
    <NextIntlClientProvider messages={messages} locale={locale} timeZone="UTC">
      {children}
    </NextIntlClientProvider>
  );
}
