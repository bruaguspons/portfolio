import About from "@/sections/about/About";
import Contact from "@/sections/contact/Contact";
import Education from "@/sections/education/Education";
import Experience from "@/sections/experience/Experience";
import Home from "@/sections/home/Home";
import Projects from "@/sections/projects/Projects";

export default function Page(): React.ReactNode {
  return (
    <>
      <Home headerHeight="h-20" />
      <About headerHeight="h-20" />
      <Experience headerHeight="h-20" />
      <Education headerHeight="h-20" />
      <Projects headerHeight="h-20" />
      <Contact headerHeight="h-20" />
    </>
  );
}
