import { useTranslations } from "next-intl";

const Footer = (): React.ReactNode => {
  const t = useTranslations("FOOTER");

  return (
    <footer className="w-full bg-navy-950 z-0">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        
        <p className="text-sm">
          {t("RIGHTS", { year: new Date().getFullYear() })}
        </p>

        <div className="flex gap-6 text-sm">
          <a
            href="https://github.com/bruaguspons"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/brunopons/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>

          <a
            href="mailto:bruaguspons@gmail.com"
          >
            {t("EMAIL")}
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
