import { useTranslations } from "next-intl";
import CustomLink from "./CustomLink";

interface Props {
    activeSection: string;
}

const Links = ({ activeSection }: Props): React.ReactNode => {
  const t = useTranslations("NAV");

  return (
    <>
      <CustomLink
        id="home" 
        activeSection={activeSection}
        label={t("HOME")}
      />
      <CustomLink
        id="about" 
        activeSection={activeSection}
        label={t("ABOUT")}
      />
      <CustomLink
        id="experience"
        activeSection={activeSection}
        label={t("EXPERIENCE")}
      />
      <CustomLink
        id="education" 
        activeSection={activeSection}
        label={t("EDUCATION")}
      />
      <CustomLink
        id="projects" 
        activeSection={activeSection}
        label={t("PROJECTS")}
      />
      <CustomLink
        id="contact" 
        activeSection={activeSection}
        label={t("CONTACT")}
      />
    </>
  );
};
export default Links;