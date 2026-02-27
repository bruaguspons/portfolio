import TextColor from "@/components/TextColor";
import { cn } from "@/lib/utils";
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
  // const [hidden, setHidden] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");
  // const lastScroll = useRef(0);

  // useEffect(() => {
  //   const handleScroll = (): void => {
  //     const current = window.scrollY;

  //     if (current > lastScroll.current && current > 80) {
  //       setHidden(true);
  //     } else {
  //       setHidden(false);
  //     }

  //     lastScroll.current = current;
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return (): void => window.removeEventListener("scroll", handleScroll);
  // }, []);

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

  // const showHeader = (): void => setHidden(false);

  const renderLink = (id: string, label: string): React.ReactNode => (
    <a className="hover:text-blue-500 transition-colors font-semibold" href={`#${id}`}>
      {activeSection === id ? <TextColor>{label}</TextColor> : label}
    </a>
  );

  return (
    <>
      <div
        className="fixed top-0 left-0 w-full h-3"
        // onMouseEnter={showHeader}
      />

      <header
        className={cn(
          `
          fixed top-0 left-0 w-full z-50
          backdrop-blur-md bg-zinc-400/15
          transition-transform duration-300
        `,
          headerHeight
        )}
      >
        <div className="h-full mx-auto max-w-7xl px-6 flex items-center justify-between">
          <div className="font-bold text-lg">
            Bruno <TextColor>Pons</TextColor>
          </div>

          <nav className="flex gap-6">
            {renderLink("home", "Inicio")}
            {renderLink("about", "Sobre mi")}
            {renderLink("experience", "Experiencia laboral")}
            {renderLink("education", "Educacion")}
            {renderLink("projects", "Proyectos")}
            {renderLink("contact", "Contacto")}
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
