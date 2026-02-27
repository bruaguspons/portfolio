import TextColor from "@/components/TextColor";
import { cn } from "@/lib/utils";
import { navSubjectManager } from "@/services/nav.service";

interface Props {
  id: string;
  activeSection: string;
  label: string;
}

const Link = ({ id, activeSection, label }: Props): React.ReactNode => {
  const isActive = activeSection === id;

  return (
    <a
      className={cn(
        "relative font-semibold w-full md:w-auto h-full flex items-center justify-center text-lg md:text-sm text-nowrap",
        "transition-all duration-300",
        "hover:text-blue-500",
        
        "active:scale-95 active:md:scale-100 active:bg-zinc-700 md:active:bg-transparent",
        "rounded-md px-2",

        "after:absolute after:bottom-0 after:left-1/2 after:h-0.5 after:bg-blue-500",
        "after:transition-all after:duration-300 after:-translate-x-1/2",

        isActive ? "after:w-full text-blue-500" : "after:w-0 hover:after:w-full"
      )}
      href={`#${id}`}
      onClick={() => navSubjectManager.setSubject(false)}
    >

      {isActive ? <TextColor>{label}</TextColor> : label}
    </a>
  );
};

export default Link;
