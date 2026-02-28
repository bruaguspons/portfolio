import Glow from "@/components/Glow";
import Section from "@/components/Section";
import Subtitle from "@/components/Subtitle";
import TextColor from "@/components/TextColor";
import TextContent from "@/components/TextContent";
import Timeline from "@/components/Timeline";
import { getI18N, LANGUAGES } from "@/i18n";
import type { ClassValue } from "clsx";

interface Props {
  headerHeight: ClassValue;
}

const Education = ({headerHeight}: Props): React.ReactNode => {
  const i18n = getI18N({currentLocale: LANGUAGES.SPANISH});
  return (
    <Section id="education" headerHeight={headerHeight}>
      <Subtitle>{i18n.EDUCATION.TITLE["1"]}<TextColor>{i18n.EDUCATION.TITLE["2"]}</TextColor></Subtitle>

      <div className="flex flex-col md:flex-row items-start">
        
        <TextContent CONTENT={i18n.EDUCATION.CONTENT} />

        <div data-aos="zoom-in">
          <Timeline items={i18n.EDUCATION.ITEMS.map((item) => ({
            title: item.TITLE,
            description: item.CONTENT.join(" "),
            date: item.DATE
          }))}/>
        </div>
      
      </div>

      <Glow className="from-amber-500/95 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"/>
      <Glow className="from-amber-500/95 right-0 bottom-0 -translate-x-1/2 translate-y-1/2"/>
    </Section>
  );
};
export default Education;