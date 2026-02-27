import { greyBgSubjectManager } from "@/services/greyBg.service";
import { useEffect, useState } from "react";

const GreyBg = (): React.ReactNode => {
  const [showGreyBg, setShowGreyBg] = useState(false);
  
  useEffect(() => {
    const subject = greyBgSubjectManager.getSubject();
    subject.subscribe((data) => setShowGreyBg(data));
  }, []);

  return (
    <div
      onClick={() => greyBgSubjectManager.setSubject(false)}
      className={`fixed h-full w-full bg-zinc-500/50 top-0 z-60 ${showGreyBg ? "block" : "hidden"}`}
    >
    </div>
  );
};
export default GreyBg;