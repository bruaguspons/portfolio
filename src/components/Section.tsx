import { cn } from "@/lib/utils";
import type { ClassValue } from "clsx";

interface Props {
    children: React.ReactNode;
    id: string;
    className?: ClassValue;
    headerHeight: ClassValue;
}

const Section = ({children, id, className, headerHeight}: Props): React.ReactNode => {
  return (
    <section id={id} className={cn("relative w-full", className)}>
      <div className={cn(headerHeight)}></div>
      {children}
    </section>
  );
};
export default Section;