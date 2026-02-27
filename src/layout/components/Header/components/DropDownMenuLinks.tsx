import { navSubjectManager } from "@/services/nav.service";
import { useEffect, useState } from "react";

const DropDownMenuLinks = (): React.ReactNode => {
  const [showNav, setShowNav] = useState(false);
  useEffect(() => {
    const subject = navSubjectManager.getSubject();
    subject.subscribe((data) => setShowNav(data));
  }, []);

  return (
    <button
      aria-label="Menu links"
      onClick={() => navSubjectManager.setSubject(!showNav)}
      className={"flex flex-col justify-center items-center h-4/5 aspect-square p-2 border-none bg-transparent gap-2 group ml-2 cursor-pointer"}
    >
      <div className={`bg-neutral-200 h-1 w-full rounded-full transition duration-500 origin-left group-active:bg-linear-to-r group-active:from-purple-500 group-active:to-blue-500 ${showNav ? "rotate-45" : "rotate-0"}`} />
      <div className={`bg-neutral-200 h-1 w-full rounded-full transition duration-500 origin-left group-active:bg-linear-to-r group-active:from-purple-500 group-active:to-blue-500 ${showNav ? "opacity-0" : "opacity-100"}`} />
      <div className={`bg-neutral-200 h-1 w-full rounded-full transition duration-500 origin-left group-active:bg-linear-to-r group-active:from-purple-500 group-active:to-blue-500 ${showNav ? "-rotate-45" : "rotate-0"}`} />
    </button>
  );
};
export default DropDownMenuLinks;