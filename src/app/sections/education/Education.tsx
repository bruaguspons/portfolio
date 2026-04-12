"use client";

import Glow from "@/components/ui/Glow";
import Section from "@/components/ui/Section";
import Subtitle from "@/components/ui/Subtitle";
import TextColor from "@/components/ui/TextColor";
import TextContent from "@/components/ui/TextContent";
import Timeline, { type TimelineItem } from "@/components/ui/Timeline";
import { useTranslations } from "next-intl";
import type { ClassValue } from "clsx";

interface Props {
  headerHeight: ClassValue;
}

const Education = ({ headerHeight }: Props): React.ReactNode => {
  const t = useTranslations("EDUCATION");
  const content = t.raw("CONTENT") as (string | { highlight: string })[][];
  const items = t.raw("ITEMS") as TimelineItem[];

  console.log(content, items);

  return (
    <Section id="education" headerHeight={headerHeight}>
      <Subtitle>
        {t("TITLE.1")}
        <TextColor>{t("TITLE.2")}</TextColor>
      </Subtitle>

      <div className="flex flex-col md:flex-row items-start">
        <TextContent CONTENT={content} />

        <div data-aos="zoom-in">
          <Timeline items={items} />
        </div>
      </div>

      <Glow className="from-amber-500/95 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
      <Glow className="from-amber-500/95 right-0 bottom-0 -translate-x-1/2 translate-y-1/2" />
    </Section>
  );
};

export default Education;
