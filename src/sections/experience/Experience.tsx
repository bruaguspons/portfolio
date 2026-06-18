"use client";

import Section from "@/components/ui/Section";
import Image from "next/image";
import Subtitle from "@/components/ui/Subtitle";
import TextColor from "@/components/ui/TextColor";
import TextContent from "@/components/ui/TextContent";
import { useTranslations } from "next-intl";
import type { ClassValue } from "clsx";
import { SITE_URL } from "@/lib/site";
import type { ExperienceItem } from "./types/experience";

interface Props {
  headerHeight: ClassValue;
}

const Experience = ({ headerHeight }: Props): React.ReactNode => {
  const t = useTranslations("EXPERIENCE");
  const items = t.raw("ITEMS") as ExperienceItem[];

  return (
    <Section id="experience" headerHeight={headerHeight}>
      <Subtitle>
        {t("TITLE.1")}
        <TextColor>{t("TITLE.2")}</TextColor>
      </Subtitle>

      {items.map((item, index) => (
        <div key={index} className="flex gap-10 xl:gap-16 flex-col md:flex-row">
          <div data-aos="fade-right" className="flex flex-col items-center">
            <div className="relative flex-none w-52 h-52 sm:w-60 sm:h-60 xl:w-72 xl:h-72">
              <Image
                className="rounded-xl object-cover"
                src={`${SITE_URL}${item.IMAGE_SRC}`}
                alt={item.TITLE}
                fill
                sizes="(min-width: 1280px) 18rem, (min-width: 640px) 15rem, 13rem"
              />
            </div>
            <h3 className="text-neutral-200 text-sm font-bold mt-1">{item.DATE}</h3>
            <h4 className="text-neutral-200 text-sm font-semibold mt-1">{item.TITLE}</h4>
          </div>

          <TextContent CONTENT={item.CONTENT} />
        </div>
      ))}

    </Section>
  );
};

export default Experience;
