import Link from "@/layout/components/Header/components/Link";

interface Props {
    activeSection: string;
}

const Links = ({ activeSection }: Props): React.ReactNode => {
  return (
    <>
      <Link
        id="home" 
        activeSection={activeSection}
        label= "Inicio"
      />
      <Link
        id="about" 
        activeSection={activeSection}
        label= "Sobre mi"
      />
      <Link
        id="experience"
        activeSection={activeSection}
        label= "Experiencia laboral"
      />
      <Link
        id="education" 
        activeSection={activeSection}
        label= "Educación"
      />
      <Link
        id="projects" 
        activeSection={activeSection}
        label= "Proyectos"
      />
      <Link
        id="contact" 
        activeSection={activeSection}
        label= "Contacto"
      />
    </>
  );
};
export default Links;