import Glow from "@/components/Glow";
import Subtitle from "@/components/Subtitle";
import TextColor from "@/components/TextColor";
import TextContent from "@/components/TextContent";
import Timeline from "@/components/Timeline";
import { getI18N, LANGUAGES } from "@/i18n";
import { cn } from "@/lib/utils";
import type { ClassValue } from "clsx";

interface Props {
  headerHeight: ClassValue;
}

const Education = ({headerHeight}: Props): React.ReactNode => {
  const i18n = getI18N({currentLocale: LANGUAGES.SPANISH});
  return (
    <div id="education" className="relative w-full">
      <div className={cn(headerHeight)}></div>
      <Subtitle>{i18n.EDUCATION.TITLE["1"]}<TextColor>{i18n.EDUCATION.TITLE["2"]}</TextColor></Subtitle>

      <div className="mt-6 flex flex-col md:flex-row items-start">
        
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
    </div>
  );
};
export default Education;