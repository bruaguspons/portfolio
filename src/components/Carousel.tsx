import { cn } from "@/lib/utils";
import type { ClassValue } from "clsx";

interface Props {
  children: React.ReactNode;
  className?: ClassValue;
  duration?: number;
}

const Carousel = ({ children, className = "", duration = 20 }: Props): React.ReactNode => {
  return (
    <div className={cn("carousel-mask overflow-hidden w-full", className)}>
      <div
        className="flex animate-carousel"
        style={{
          animationDuration: `${duration}s`,
        }}
      >
        {children}
      </div>
    </div>
  );
};

const duplicateItems = ({ children }: { children: React.ReactNode[] }): React.ReactNode => {
  const items = [...children, ...children];
  return (
    items
  );
};

const Item = ({ children }: { children: React.ReactNode }): React.ReactNode => {
  return (
    <>
      <div className="shrink-0 grayscale flex justify-center items-center gap-2 text-2xl font-semibold mx-4">{children}</div>
    </>
  );
};

Carousel.duplicateItems = duplicateItems;
Carousel.Item = Item;

export default Carousel;
