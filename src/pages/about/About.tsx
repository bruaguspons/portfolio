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

const About = ({headerHeight}: Props): React.ReactNode => {

  const i18n = getI18N({currentLocale: LANGUAGES.SPANISH});

  return (
    <div id="about" className="relative w-full">
      <div className={cn(headerHeight)}></div>
      <Subtitle>{i18n.ABOUT.TITLE["1"]}<TextColor>{i18n.ABOUT.TITLE["2"]}</TextColor>{i18n.ABOUT.TITLE["3"]}</Subtitle>

      <TextContent CONTENT={i18n.ABOUT.CONTENT} />

      <Glow className="from-green-500/95 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"/>

    </div>
  );
};
export default About;