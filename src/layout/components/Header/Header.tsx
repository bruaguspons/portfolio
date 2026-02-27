import TextColor from "@/components/TextColor";
import DropDownMenuLinks from "@/layout/components/Header/components/DropDownMenuLinks";
import Links from "@/layout/components/Header/components/Links";
import { cn } from "@/lib/utils";
import { navSubjectManager } from "@/services/nav.service";
import type { ClassValue } from "clsx";
import { useEffect, useState } from "react";

interface Props {
  headerHeight: ClassValue;
}

const sections = [
  "home",
  "about",
  "experience",
  "education",
  "projects",
  "contact"
];

const Header = ({ headerHeight }: Props): React.ReactNode => {
  const [showNav, setShowNav] = useState(false);
  useEffect(() => {
    const subject = navSubjectManager.getSubject();
    subject.subscribe((data) => setShowNav(data));
  }, []);
  
  useEffect(() => {
    document.body.style.overflow = showNav? "hidden": "";

    return (): void => {document.body.style.overflow = "";};
  }, [showNav]);


  const [activeSection, setActiveSection] = useState<string>("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-40% 0px -50% 0px",
        threshold: 0
      }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return (): void => observer.disconnect();
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 w-full z-50 flex items-center justify-between",
          "backdrop-blur-md bg-zinc-400/15",
          "transition-transform duration-300",
          headerHeight
        )}
      >
        <a href="/" className="ml-6 font-bold text-lg whitespace-nowrap">Bruno <TextColor>Pons</TextColor></a>

        <div className="mr-6 h-full md:hidden flex items-center justify-center">
          <DropDownMenuLinks />
        </div>

        <nav
          className={cn(
            "mr-6",
            "bg-transparent w-full h-full",
            "hidden md:flex flex-row justify-end items-center gap-2")}
        >
          {<Links activeSection={activeSection} />}
        </nav>
      </header>
      <nav
        className={cn(
          "fixed inset-0 flex flex-col justify-evenly items-center z-45", 
          "bg-zinc-800 duration-500 transition-transform", 
          showNav ? "translate-y-0" : "-translate-y-full")}
      >
        <div className={cn("flex-none", headerHeight)}></div>
        {<Links activeSection={activeSection} />}
      </nav>
    </>
  );
};

export default Header;
