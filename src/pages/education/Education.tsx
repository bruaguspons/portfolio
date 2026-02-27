import Glow from "@/components/Glow";
import TextColor from "@/components/TextColor";
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
      <h2 data-aos="fade-right" className="font-extrabold text-[clamp(2rem,6vw,4rem)] leading-none tracking-[-0.11em] whitespace-nowrap mt-4">{i18n.EDUCATION.TITLE["1"]}<TextColor>{i18n.EDUCATION.TITLE["2"]}</TextColor></h2>

      <div className="mt-6 text-lg flex items-start">
        
        <div data-aos="fade-right" className="max-w-4xl text-lg">
          {i18n.EDUCATION.CONTENT.map((paragraph, index) => (
            <p key={index} className="mb-4">{paragraph}</p>
          ))}
        </div>

        <div data-aos="fade-left">
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