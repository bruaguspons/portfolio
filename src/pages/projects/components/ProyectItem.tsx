import { cn } from "@/lib/utils";
import type { ClassValue } from "clsx";

interface Props {
  imgUrl: string
  title: React.ReactNode
  className?: ClassValue
}

const ProyectItem = ({
  imgUrl,
  title,
  className
}: Props): React.ReactNode => {
  return (
    <div
      className={cn(
        "relative flex items-center justify-center py-6 transition border bg-zinc-900 border-zinc-800 rounded-md group px-6 before:w-full before:h-full before:rounded-2xl before:backdrop-blur-md before:z-10 before:absolute before:inset-0 group hover:border-zinc-400/80",
        className
      )}
    >
      {title && (
        <p
          className={cn(
            "absolute z-20 w-full text-base font-bold text-center text-white -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 max-w-[26ch] uppercase text-balance",
            "transition-all duration-300 z-60",
            "group-hover:translate-y-full"
          )}
        >
          {title}
        </p>
      )}
      {imgUrl && (
        <div
          className={cn(
            "relative h-auto opacity-20 w-max rotate-6 z-50 blur-sm ",
            "transition-all duration-300",
            "group-hover:blur-none group-hover:-translate-y-1/3 group-hover:opacity-100"
          )}
        >
          <img src={imgUrl} className='w-auto h-32 [drop-shadow:3px_4px_8px_rgba(0,0,0,0.4)]' alt='' />
        </div>
      )}
    </div>
  );
};
export default ProyectItem;