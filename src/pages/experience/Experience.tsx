import Glow from "@/components/Glow";
import Subtitle from "@/components/Subtitle";
import TextColor from "@/components/TextColor";
import TextContent from "@/components/TextContent";
import { getI18N, LANGUAGES } from "@/i18n";
import { cn } from "@/lib/utils";
import type { ClassValue } from "clsx";

interface Props {
  headerHeight: ClassValue;
}

const Experience = ({headerHeight}: Props): React.ReactNode => {
  
  const i18n = getI18N({currentLocale: LANGUAGES.SPANISH});
  
  return (
    <div id="experience" className="relative w-full">
      <div className={cn(headerHeight)}></div>
      <Subtitle>{i18n.EXPERIENCE.TITLE["1"]}<TextColor>{i18n.EXPERIENCE.TITLE["2"]}</TextColor></Subtitle>

      <div className="mt-6">
        {i18n.EXPERIENCE.ITEMS.map((item, index) => (
          <div key={index} className="mb-8 flex gap-10 flex-col md:flex-row">
            <div data-aos="fade-right" className="flex flex-col items-center">
              <h4 className="text-neutral-200 text-sm font-semibold mb-1">{item.TITLE}</h4>
              <h3 className="text-neutral-200 text-sm font-bold mb-1">{item.DATE}</h3>
              <picture
                className="flex-none w-60 h-60"
              >
                <img
                  className="rounded-xl object-cover w-full h-full"
                  src={item.IMAGE_SRC}
                  alt="bruno pons"
                />
              </picture>
            </div>
            
            <TextContent CONTENT={item.CONTENT} />
          </div>
        ))}
      </div>

      <Glow className="from-purple-500/95 right-0 top-0 -translate-x-1/2 translate-y-1/2"/>
      <Glow className="from-purple-500/95 left-0 bottom-0 translate-x-1/2 translate-y-1/2"/>
    </div>
  );
};
export default Experience;