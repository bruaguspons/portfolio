import { cn } from "@/lib/utils";
import type { ClassValue } from "clsx";

interface Props {
    children: React.ReactNode;
    className?: ClassValue
}

const Subtitle = ({children, className}: Props): React.ReactNode => {
  return (
    <h2 data-aos="fade-right" className={cn("font-extrabold text-3xl sm:text-5xl leading-none tracking-[-0.080em] whitespace-nowrap mt-4 mb-6", className)}>{children}</h2>
  );
};
export default Subtitle;