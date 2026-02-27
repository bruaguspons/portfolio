import { cn } from "@/lib/utils";
import type { ClassValue } from "clsx";

interface Props {
    children: React.ReactNode;
    className?: ClassValue;
}

const TextColor = ({children, className = ""}: Props): React.ReactNode => {
  return (
    <span
      className={cn("font-extrabold text-transparent bg-clip-text bg-linear-to-r from-blue-500 to-sky-500 transition ease-in-out duration-150", className)}
    >
      {children}
    </span>
  );
};
export default TextColor;