import { cn } from "@/lib/utils";
import { useState } from "react";

interface Props {
  items: {
    title: string;
    description?: string;
    date?: string;
  }[];
}

const Timeline = ({ items }: Props): React.ReactNode => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number): void => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {/* espacio inicial */}
      <div className="ml-6 w-px h-12 bg-linear-to-t from-zinc-300 to-transparent"></div>

      <div className="relative ml-6">
        {/* línea vertical */}
        <div className="absolute left-0 top-0 bottom-0 w-px bg-zinc-300"></div>

        {items.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className={cn(
                "ml-6 group",
                index < items.length - 1 ? "mb-10" : "mb-0"
              )}
              onClick={() => toggle(index)}
            >
              {/* Punto */}
              <span
                className={cn(
                  "absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full ring-4 ring-white transition-all duration-300",
                  isOpen
                    ? "bg-linear-to-br from-blue-500 to-sky-500"
                    : "bg-zinc-300",
                  "group-hover:bg-linear-to-br group-hover:from-blue-500 group-hover:to-sky-500"
                )}
              >
                <span className="h-2 w-2 rounded-full bg-white"></span>
              </span>

              {/* Card */}
              <div className="relative bg-zinc-600/30 backdrop-blur-md p-4 rounded-lg border border-zinc-600/30 shadow-sm transition-all duration-300 hover:shadow-lg overflow-hidden cursor-pointer">
                
                {/* border top animado */}
                <div
                  className={cn(
                    "absolute top-0 left-0 h-0.5 w-full bg-blue-500 origin-left transition-transform duration-500",
                    isOpen ? "scale-x-100" : "scale-x-0",
                    "group-hover:scale-x-100"
                  )}
                ></div>

                {item.date && (
                  <time
                    className={cn(
                      "text-sm transition-colors duration-300",
                      isOpen ? "text-blue-400" : "text-neutral-200",
                      "group-hover:text-blue-400"
                    )}
                  >
                    {item.date}
                  </time>
                )}

                <h3
                  className={cn(
                    "font-semibold transition-colors duration-300",
                    isOpen && "text-blue-400",
                    "group-hover:text-blue-400"
                  )}
                >
                  {item.title}
                </h3>

                {item.description && (
                  <p
                    className={cn(
                      "text-sm mt-1 overflow-hidden transition-all duration-300",
                      isOpen ? "opacity-100 max-h-96" : "opacity-0 max-h-0",
                      "group-hover:opacity-100 group-hover:max-h-96"
                    )}
                  >
                    {item.description}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* espacio final */}
      <div className="ml-6 w-px h-12 bg-linear-to-t to-zinc-300 from-transparent"></div>
    </>
  );
};

export default Timeline;
