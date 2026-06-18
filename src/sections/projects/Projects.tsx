"use client";

import { useState } from "react";
import Subtitle from "@/components/ui/Subtitle";
import TextColor from "@/components/ui/TextColor";
import { useTranslations } from "next-intl";
import ProjectItem from "./components/ProjectItem";
import type { ClassValue } from "clsx";
import Section from "@/components/ui/Section";
import { SITE_URL } from "@/lib/site";
import type { Project } from "./types/project";

interface Props {
  headerHeight: ClassValue;
}

const isTouchDevice = (): boolean =>
  typeof window !== "undefined" &&
  window.matchMedia("(hover: none)").matches;

const LIST_OF_PROJECTS: Project[] = [
  {
    title: "Java Ecommerce",
    imgUrl: `${SITE_URL}/projects/java-icon.svg`,
    link: "https://github.com/bruaguspons/java-ecommerce"
  },
  {
    title: "Chess Game",
    imgUrl: `${SITE_URL}/projects/chess-icon.png`,
    link: "https://github.com/bruaguspons/chess"
  },
  {
    title: "Spotify Clone",
    imgUrl: `${SITE_URL}/projects/spotify-icon.svg`,
    link: "https://github.com/bruaguspons/spotify-clone-react"
  },
  {
    title: "Space Invaders",
    imgUrl: `${SITE_URL}/projects/space-icon.svg`,
    link: "https://github.com/bruaguspons/SpaceInvaders"
  },
  {
    title: "Design Patterns",
    imgUrl: `${SITE_URL}/projects/go-icon.svg`,
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
        className="relative grid grid-cols-1 gap-4 xl:gap-6 mx-auto sm:grid-cols-2 lg:grid-cols-3 max-w-5xl xl:max-w-6xl"
      >
        {LIST_OF_PROJECTS.map((project, index) => (
          <ProjectItem
            key={`${project.title}-${index}`}
            {...project}
            active={activeIndex === index}
            onClick={handleProjectClick(index)}
          />
        ))}

        {Array.from({ length: 1 }).map((_, i) => (
          <ProjectItem
            imgUrl=""
            title
            key={`${i}-ghost`}
            className="hidden cursor-not-allowed pointer-events-none min-h-44 opacity-40 md:block"
          />
        ))}
      </div>

    </Section>
  );
};

export default Projects;
