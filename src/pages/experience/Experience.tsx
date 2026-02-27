import Glow from "@/components/Glow";
import TextColor from "@/components/TextColor";
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
      <h2 data-aos="fade-right" className="font-extrabold text-[clamp(2rem,6vw,4rem)] leading-none tracking-[-0.11em] whitespace-nowrap mt-4">{i18n.EXPERIENCE.TITLE["1"]}<TextColor>{i18n.EXPERIENCE.TITLE["2"]}</TextColor></h2>

      <div className="mt-6 text-lg">
        {i18n.EXPERIENCE.ITEMS.map((item, index) => (
          <div key={index} className="mb-8 flex gap-10">
            <div data-aos="fade-right">
              <h4 className="text-lg font-semibold mb-2">{item.TITLE}</h4>
              <h3 className="text-xl font-bold mb-2">{item.DATE}</h3>
              <picture
                className="flex-none w-60 h-60 mb-10 sm:w-72 sm:h-72 relative z-10 flex justify-center items-center"
              >
                <img
                  className="rounded-xl object-cover w-full h-full"
                  src={item.IMAGE_SRC}
                  alt="bruno pons"
                />
              </picture>
            </div>
            <div data-aos="fade-left">
              {item.CONTENT.map((paragraph, pIndex) => (
                <p key={pIndex} className="mb-2">{paragraph}</p>
              ))}
            </div>
          </div>
        ))}
      </div>

      <Glow className="from-purple-500/95 right-0 top-0 -translate-x-1/2 translate-y-1/2"/>
      <Glow className="from-purple-500/95 left-0 bottom-0 translate-x-1/2 translate-y-1/2"/>
    </div>
  );
};
export default Experience;