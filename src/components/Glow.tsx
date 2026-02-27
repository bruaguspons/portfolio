import { cn } from "@/lib/utils";
import type { ClassValue } from "clsx";
import type React from "react";

interface Props {
    className?: ClassValue;
}

const Glow = ({
  className = ""
}: Props): React.ReactNode => {
  return (
    <div className={cn("absolute w-64 aspect-square rounded-full bg-radial to-transparent blur-[100px] -z-10", className)} />
  );
};

export default Glow;


