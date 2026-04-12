import About from "@/app/sections/about/About";
import Contact from "@/app/sections/contact/Contact";
import Education from "@/app/sections/education/Education";
import Experience from "@/app/sections/experience/Experience";
import Home from "@/app/sections/home/Home";
import Projects from "@/app/sections/projects/Projects";

export default function Page(): React.ReactNode {
  return (
    <>
      <Home headerHeight="h-16" />
      <About headerHeight="h-16" />
      <Experience headerHeight="h-16" />
      <Education headerHeight="h-16" />
      <Projects headerHeight="h-16" />
      <Contact headerHeight="h-16" />
    </>
  );
}
