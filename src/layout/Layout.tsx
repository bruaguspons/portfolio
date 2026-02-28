import Footer from "@/layout/components/Footer";
import GreyBg from "@/layout/components/GreyBg";
import Header from "@/layout/components/Header/Header";
import InfoTag from "@/layout/components/InfoTag";
import SocialMediaPanel from "@/layout/components/SocialMediaPanel";
import { cn } from "@/lib/utils";
import type { ClassValue } from "clsx";

interface Props {
  children: React.ReactNode;
  headerHeight: ClassValue;
  className?: ClassValue;
  showExtras?: boolean;
}

const Layout = ({
  children, 
  headerHeight,
  className = "",
  showExtras = true
}: Props): React.ReactNode => {
  return (
    <>
      {showExtras && (<Header headerHeight={headerHeight}/>)}
      <main className={cn("grow relative w-full h-full flex flex-col justify-center items-start bg-zinc-800 px-[10vw] z-0", className)}>
        {children}
      </main>

      {showExtras && (
        <>
          <GreyBg />
        
          <SocialMediaPanel />
          <InfoTag />
        
          <Footer />
        </>
      )}
    </>

  );
};
export default Layout;