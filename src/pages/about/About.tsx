import Glow from "@/components/Glow";
import TextColor from "@/components/TextColor";
import { getI18N, LANGUAGES } from "@/i18n";
import { cn } from "@/lib/utils";
import type { ClassValue } from "clsx";

interface Props {
  headerHeight: ClassValue;
}

const About = ({headerHeight}: Props): React.ReactNode => {

  const i18n = getI18N({currentLocale: LANGUAGES.SPANISH});

  return (
    <div id="about" className="relative w-full">
      <div className={cn(headerHeight)}></div>
      <h2 data-aos="fade-right" className="font-extrabold text-[clamp(2rem,6vw,4rem)] leading-none tracking-[-0.11em] whitespace-nowrap mt-4">{i18n.ABOUT.TITLE["1"]}<TextColor>{i18n.ABOUT.TITLE["2"]}</TextColor>{i18n.ABOUT.TITLE["3"]}</h2>

      <div data-aos="fade-up" className="max-w-4xl mt-6 text-lg">
        {i18n.ABOUT.CONTENT.map((paragraph, index) => (
          <p key={index} className="mb-4">{paragraph}</p>
        ))}
      </div>

      <Glow className="from-green-500/95 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"/>

    </div>
  );
};
export default About;