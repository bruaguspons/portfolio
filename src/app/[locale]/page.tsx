import About from "@/sections/about/About";
import Contact from "@/sections/contact/Contact";
import Education from "@/sections/education/Education";
import Experience from "@/sections/experience/Experience";
import Home from "@/sections/home/Home";
import Projects from "@/sections/projects/Projects";

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
