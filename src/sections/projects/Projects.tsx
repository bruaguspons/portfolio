"use client";

import { useState } from "react";
import Glow from "@/components/ui/Glow";
import Subtitle from "@/components/ui/Subtitle";
import TextColor from "@/components/ui/TextColor";
import { useTranslations } from "next-intl";
import ProjectItem from "./components/ProjectItem";
import type { ClassValue } from "clsx";
import Section from "@/components/ui/Section";
import { BASE_PATH } from "@/lib/site";

interface Props {
  headerHeight: ClassValue;
}

interface Project {
  title: string;
  imgUrl: string;
  link: string;
}

const isTouchDevice = (): boolean =>
  typeof window !== "undefined" &&
  window.matchMedia("(hover: none)").matches;

const LIST_OF_PROJECTS: Project[] = [
  {
    title: "Chess Game",
    imgUrl: `${BASE_PATH}/projects/chess-icon.png`,
    link: "https://github.com/bruaguspons/chess"
  },
  {
    title: "Spotify Clone",
    imgUrl: `${BASE_PATH}/projects/spotify-icon.svg`,
    link: "https://github.com/bruaguspons/spotify-clone-react"
  },
  {
    title: "Space Invaders",
    imgUrl: `${BASE_PATH}/projects/space-icon.svg`,
    link: "https://github.com/bruaguspons/SpaceInvaders"
  },
  {
    title: "Design Patterns",
    imgUrl: `${BASE_PATH}/projects/go-icon.svg`,
    link: "https://github.com/bruaguspons/design-patterns"
  }
];

const Projects = ({ headerHeight }: Props): React.ReactNode => {
  const t = useTranslations("PROJECTS");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleProjectClick =
    (index: number) =>
      (e: React.MouseEvent<HTMLAnchorElement>): void => {
        if (!isTouchDevice()) return;

        if (activeIndex !== index) {
          e.preventDefault();
          setActiveIndex(index);
        }
      };

  return (
    <Section id="projects" headerHeight={headerHeight}>

      <Subtitle>
        {t("TITLE.1")}
        <TextColor>{t("TITLE.2")}</TextColor>
      </Subtitle>

      <div
        data-aos="zoom-in"
        className="relative grid grid-cols-1 gap-4 px-4 mx-auto sm:grid-cols-2 lg:grid-cols-3 md:px-8"
      >
        {LIST_OF_PROJECTS.map((project, index) => (
          <ProjectItem
            key={`${project.title}-${index}`}
            {...project}
            active={activeIndex === index}
            onClick={handleProjectClick(index)}
          />
        ))}

        {Array.from({ length: 2 }).map((_, i) => (
          <ProjectItem
            imgUrl=""
            title
            key={`${i}-ghost`}
            className="hidden cursor-not-allowed pointer-events-none min-h-44 opacity-40 md:block"
          />
        ))}
      </div>

      <Glow className="from-teal-500/95 left-0 top-0 translate-x-1/2 translate-y-1/2" />
      <Glow className="from-teal-500/95 right-0 bottom-0 -translate-x-1/2 " />
    </Section>
  );
};

export default Projects;
