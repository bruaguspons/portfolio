import { cn } from "@/lib/utils";
import type { IconProps } from "./types";

const Kotlin = ({ className = ""}: IconProps): React.ReactNode => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" className={cn(className)}><defs><linearGradient id="kotlin-original-a" x1="500.003" x2="-.097" y1="579.106" y2="1079.206" gradientTransform="translate(15.534 -96.774) scale(.1939)" gradientUnits="userSpaceOnUse"><stop offset=".003" stopColor="#e44857"/><stop offset=".469" stopColor="#c711e1"/><stop offset="1" stopColor="#7f52ff"/></linearGradient></defs><path fill="url(#kotlin-original-a)" d="M112.484 112.484H15.516V15.516h96.968L64 64Zm0 0"/></svg>
  );
};
export default Kotlin;
