import CustomLink from "./CustomLink";

interface Props {
    activeSection: string;
}

const Links = ({ activeSection }: Props): React.ReactNode => {
  return (
    <>
      <CustomLink
        id="home" 
        activeSection={activeSection}
        label= "Inicio"
      />
      <CustomLink
        id="about" 
        activeSection={activeSection}
        label= "Sobre mi"
      />
      <CustomLink
        id="experience"
        activeSection={activeSection}
        label= "Experiencia laboral"
      />
      <CustomLink
        id="education" 
        activeSection={activeSection}
        label= "Educación"
      />
      <CustomLink
        id="projects" 
        activeSection={activeSection}
        label= "Proyectos"
      />
      <CustomLink
        id="contact" 
        activeSection={activeSection}
        label= "Contacto"
      />
    </>
  );
};
export default Links;