import Carousel from "@/components/Carousel";
import Glow from "@/components/Glow";
import Css3 from "@/pages/home/icons/Css3";
import Docker from "@/pages/home/icons/Docker";
import Go from "@/pages/home/icons/Go";
import Html5 from "@/pages/home/icons/Html5";
import Java from "@/pages/home/icons/Java";
import Javascript from "@/pages/home/icons/Javascript";
import Mongodb from "@/pages/home/icons/Mongodb";
import Nodejs from "@/pages/home/icons/Nodejs";
import React from "@/pages/home/icons/React";
import Redux from "@/pages/home/icons/Redux";
import Tailwindcss from "@/pages/home/icons/Tailwindcss";
import Typescript from "@/pages/home/icons/Typescript";
import { cn } from "@/lib/utils";
import type { ClassValue } from "clsx";
import AOS from "aos";
import "aos/dist/aos.css";
import FlipTitle from "@/pages/home/components/FlipTitle";
import Postgresql from "@/pages/home/icons/Postgresql";

interface Props {
  headerHeight: ClassValue;
}

const Home = ({headerHeight}: Props): React.ReactNode => {
  AOS.init();

  return (
    <div id="home" className="relative w-full h-screen min-h-screen flex flex-col">
      <div className={cn(headerHeight)}></div>

      <div className="grow flex flex-col items-center ">
        <div className="w-full flex-1 flex flex-col-reverse sm:flex-row items-center justify-center sm:justify-between max-w-196">
          <FlipTitle />
          <picture
            className="flex-none w-60 h-60 mb-10 sm:w-72 sm:h-72 relative z-10 flex justify-center items-center"
          >
            <img
              className="rounded-full object-cover w-full h-full"
              src={"/bruno_pons.jpg"}
              alt="bruno pons"
            />
          </picture>
        </div>

        <div className="w-full mb-6">
          <Carousel>
            <Carousel.duplicateItems>
              <Carousel.Item><Html5 className="w-10 h-10" /> Html 5</Carousel.Item>
              <Carousel.Item><Css3 className="w-10 h-10" /> Css 3</Carousel.Item>
              <Carousel.Item><Javascript className="w-10 h-10" /> Javascript</Carousel.Item>
              <Carousel.Item><Typescript className="w-10 h-10" /> Typescript</Carousel.Item>
              <Carousel.Item><React className="w-10 h-10" /> React</Carousel.Item>
              <Carousel.Item><Redux className="w-10 h-10" /> Redux</Carousel.Item>
              <Carousel.Item><Tailwindcss className="w-10 h-10" /> Tailwindcss</Carousel.Item>
              <Carousel.Item><Nodejs className="w-10 h-10" /> Nodejs</Carousel.Item>
              <Carousel.Item><Go className="w-10 h-10" /> Go</Carousel.Item>
              <Carousel.Item><Java className="w-10 h-10" /> Java</Carousel.Item>
              <Carousel.Item><Docker className="w-10 h-10" /> Docker</Carousel.Item>
              <Carousel.Item><Postgresql className="w-10 h-10" /> Postgresql</Carousel.Item>
              <Carousel.Item><Mongodb className="w-10 h-10" /> Mongodb</Carousel.Item>
            </Carousel.duplicateItems>
          </Carousel>
        </div>
      </div>


      <Glow className="from-blue-500/95 left-0 top-0"/>
      <Glow className="from-blue-500/95 right-0 bottom-0"/>

    </div>
  );
};
export default Home;