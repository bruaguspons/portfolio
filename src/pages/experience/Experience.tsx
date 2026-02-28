import Glow from "@/components/Glow";
import Section from "@/components/Section";
import Subtitle from "@/components/Subtitle";
import TextColor from "@/components/TextColor";
import TextContent from "@/components/TextContent";
import { getI18N, LANGUAGES } from "@/i18n";
import type { ClassValue } from "clsx";

interface Props {
  headerHeight: ClassValue;
}

const Experience = ({headerHeight}: Props): React.ReactNode => {
  
  const i18n = getI18N({currentLocale: LANGUAGES.SPANISH});
  
  return (
    <Section id="experience" headerHeight={headerHeight}>
      <Subtitle>{i18n.EXPERIENCE.TITLE["1"]}<TextColor>{i18n.EXPERIENCE.TITLE["2"]}</TextColor></Subtitle>

      {i18n.EXPERIENCE.ITEMS.map((item, index) => (
        <div key={index} className="flex gap-10 flex-col md:flex-row">
          <div data-aos="fade-right" className="flex flex-col items-center">
            <picture className="flex-none w-52 h-52 sm:w-60 sm:h-60">
              <img
                className="rounded-xl object-cover w-full h-full"
                src={item.IMAGE_SRC}
                alt="bruno pons"
              />
            </picture>
            <h3 className="text-neutral-200 text-sm font-bold mt-1">{item.DATE}</h3>
            <h4 className="text-neutral-200 text-sm font-semibold mt-1">{item.TITLE}</h4>
          </div>
            
          <TextContent CONTENT={item.CONTENT} />
        </div>
      ))}

      <Glow className="from-purple-500/95 right-0 top-0 -translate-x-1/2 translate-y-1/2"/>
      <Glow className="from-purple-500/95 left-0 bottom-0 translate-x-1/2 translate-y-1/2"/>
    </Section>
  );
};
export default Experience;