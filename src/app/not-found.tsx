import { getTranslations } from "next-intl/server";
import StatusError from "@/components/ui/StatusError";
import { routing } from "@/i18n/routing";
import { montserrat } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import "./globals.css";

export default async function NotFound(): Promise<React.ReactNode> {
  const locale = routing.defaultLocale;
  const t = await getTranslations({ locale, namespace: "ERROR" });

  return (
    <html
      lang={locale}
      className="dark scroll-smooth"
      data-scroll-behavior="smooth"
    >
      <body
        className={cn(
          montserrat.className,
          "antialiased flex min-h-screen flex-col text-neutral-50 bg-transparent"
        )}
      >
        <StatusError
          statusCode={404}
          homeHref={`/${locale}`}
          copy={{
            oops: t("OOPS"),
            notFoundTitle: t("NOT_FOUND_TITLE"),
            notFoundDescription: t("NOT_FOUND_DESCRIPTION"),
            genericTitle: t("GENERIC_TITLE"),
            genericDescription: t("GENERIC_DESCRIPTION"),
            home: t("HOME"),
            retry: t("RETRY"),
            back: t("BACK"),
          }}
        />
      </body>
    </html>
  );
}
