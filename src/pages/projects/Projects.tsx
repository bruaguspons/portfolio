import Glow from "@/components/Glow";
import TextColor from "@/components/TextColor";
import { getI18N, LANGUAGES } from "@/i18n";
import { cn } from "@/lib/utils";
import ProyectItem from "@/pages/projects/components/ProyectItem";
import type { ClassValue } from "clsx";

interface Props {
  headerHeight: ClassValue;
}

const Projects = ({headerHeight}: Props): React.ReactNode => {
  const i18n = getI18N({currentLocale: LANGUAGES.SPANISH});
  const LIST_OF_PROYECTS = [
    {
      title: "Spotify Clone",
      imgUrl: "/projects/spotify-icon.svg"
    },
    {
      title: "Proyecto 2",
      imgUrl: "/projects/gift2.png"
    },
    {
      title: "Proyecto 1",
      imgUrl: "/projects/spotify-icon.svg"
    },
    {
      title: "Proyecto 2",
      imgUrl: "/projects/gift2.png"
    },
  ];


  return (
    <div id="projects" className="relative w-full">
      <div className={cn(headerHeight)}></div>
      <h2 data-aos="fade-right" className="font-extrabold text-[clamp(2rem,6vw,4rem)] leading-none tracking-[-0.11em] whitespace-nowrap mt-4">{i18n.PROJECTS.TITLE["1"]}<TextColor>{i18n.PROJECTS.TITLE["2"]}</TextColor></h2>

      <div data-aos="zoom-in" className="relative grid grid-cols-1 gap-4 px-4 mx-auto mt-10 sm:grid-cols-2 lg:grid-cols-3 md:px-8">
        {LIST_OF_PROYECTS.map((gift, index) => (
          <ProyectItem key={`${gift.title}-${index}`} {...gift} />
        ))}
        {Array.from({ length: 2 }).map((_, i) => (
          <ProyectItem
            imgUrl=""
            title
            key={`${i}-ghost`}
            className="hidden cursor-not-allowed pointer-events-none min-h-44 opacity-40 md:block"
          />
        ))}
      </div>

      <Glow className="from-teal-500/95 left-0 top-0 translate-x-1/2 translate-y-1/2"/>
      <Glow className="from-teal-500/95 right-0 bottom-0 -translate-x-1/2 "/>
    </div>
  );
};
export default Projects;