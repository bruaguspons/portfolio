"use client";

import Glow from "@/components/ui/Glow";
import Section from "@/components/ui/Section";
import Subtitle from "@/components/ui/Subtitle";
import TextColor from "@/components/ui/TextColor";
import TextContent from "@/components/ui/TextContent";
import { useTranslations } from "next-intl";
import type { ClassValue } from "clsx";

interface Props {
  headerHeight: ClassValue;
}

const About = ({ headerHeight }: Props): React.ReactNode => {
  const t = useTranslations("ABOUT");
  const content = t.raw("CONTENT") as (string | { highlight: string })[][];

  return (
    <Section id="about" headerHeight={headerHeight}>
      <Subtitle>
        {t("TITLE.1")}
        <TextColor>{t("TITLE.2")}</TextColor>
        {t("TITLE.3")}
      </Subtitle>

      <TextContent CONTENT={content} />

      <Glow className="from-green-500/95 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
    </Section>
  );
};

export default About;
