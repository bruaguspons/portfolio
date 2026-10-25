import { useLocale, useTranslations } from "next-intl";
import StatusError from "@/components/ui/StatusError";

export default function NotFound(): React.ReactNode {
  const t = useTranslations("ERROR");
  const locale = useLocale();

  return (
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
  );
}
