"use client";
import TextColor from "@/components/ui/TextColor";
import DropDownMenuLinks from "./components/DropDownMenuLinks";
import Links from "./components/Links";
import { cn } from "@/lib/utils";
import { navSubjectManager } from "@/lib/nav.service";
import { useEffect, useState } from "react";
import Link from "next/link";

const sections = [
  "home",
  "about",
  "experience",
  "education",
  "projects",
  "contact"
];

const Header = (): React.ReactNode => {
  const [showNav, setShowNav] = useState(false);
  useEffect(() => {
    const subject = navSubjectManager.getSubject();
    const sub = subject.subscribe((data) => setShowNav(data));
    return (): void => sub.unsubscribe();
  }, []);
  


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

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = (): void => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return (): void => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-4 left-[10vw] right-[10vw] z-50 h-14",
          "flex items-center justify-between",
          "rounded-2xl border border-white/10 shadow-lg shadow-black/30",
          "backdrop-blur-md transition-colors duration-300",
          scrolled ? "bg-navy-900/60" : "bg-navy-900/30"
        )}
      >
        <Link href="/" className="ml-5 font-bold text-lg whitespace-nowrap">Bruno <TextColor>Pons</TextColor></Link>

        <div className="mr-4 h-full lg:hidden flex items-center justify-center">
          <DropDownMenuLinks />
        </div>

        <nav
          className={cn(
            "mr-4",
            "bg-transparent w-full h-full",
            "hidden lg:flex flex-row justify-end items-center gap-1")}
        >
          <Links activeSection={activeSection} />
        </nav>
      </header>
      <nav
        className={cn(
          "fixed top-20 left-[10vw] right-[10vw] z-45 lg:hidden",
          "flex flex-col items-stretch py-2",
          "rounded-2xl border border-white/10 shadow-lg shadow-black/30",
          "backdrop-blur-md bg-navy-900/80",
          "transition-all duration-300",
          showNav ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-3 pointer-events-none"
        )}
      >
        <Links activeSection={activeSection} />
      </nav>
    </>
  );
};

export default Header;
