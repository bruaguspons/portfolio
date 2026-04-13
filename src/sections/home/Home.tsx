import Carousel from "@/components/ui/Carousel";
import Glow from "@/components/ui/Glow";
import Css3 from "@/icons/tech/Css3";
import Docker from "@/icons/tech/Docker";
import Go from "@/icons/tech/Go";
import Html5 from "@/icons/tech/Html5";
import Java from "@/icons/tech/Java";
import Javascript from "@/icons/tech/Javascript";
import Mongodb from "@/icons/tech/Mongodb";
import Nodejs from "@/icons/tech/Nodejs";
import ReactIcon from "@/icons/tech/React";
import Redux from "@/icons/tech/Redux";
import Tailwindcss from "@/icons/tech/Tailwindcss";
import Typescript from "@/icons/tech/Typescript";
import type { ClassValue } from "clsx";
import FlipTitle from "./components/FlipTitle";
import Postgresql from "@/icons/tech/Postgresql";
import Section from "@/components/ui/Section";
import Image from "next/image";
import { BASE_PATH } from "@/lib/site";

interface Props {
  headerHeight: ClassValue;
}

const Home = ({headerHeight}: Props): React.ReactNode => {
  return (
    <Section id="home" className="h-dvh min-h-dvh flex flex-col" headerHeight={headerHeight}>
      <div className="grow flex flex-col items-center ">
        <div className="w-full flex-1 flex flex-col-reverse md:flex-row items-center justify-center md:justify-between max-w-196">
          <FlipTitle />
          <Image
            className="flex-none w-60 h-60 md:w-72 md:h-72 mb-10 md:mb-0 rounded-full object-cover"
            src={`${BASE_PATH}/bruno_pons.jpg`}
            alt="bruno pons"
            width={600}
            height={600}
            sizes="(min-width: 768px) 18rem, 15rem"
            priority
          />

        </div>

        <div className="w-full mb-6">
          <Carousel>
            <Carousel.DuplicateItems>
              <Carousel.Item><Html5 className="w-10 h-10" /> Html 5</Carousel.Item>
              <Carousel.Item><Css3 className="w-10 h-10" /> Css 3</Carousel.Item>
              <Carousel.Item><Javascript className="w-10 h-10" /> Javascript</Carousel.Item>
              <Carousel.Item><Typescript className="w-10 h-10" /> Typescript</Carousel.Item>
              <Carousel.Item><ReactIcon className="w-10 h-10" /> React</Carousel.Item>
              <Carousel.Item><Redux className="w-10 h-10" /> Redux</Carousel.Item>
              <Carousel.Item><Tailwindcss className="w-10 h-10" /> Tailwindcss</Carousel.Item>
              <Carousel.Item><Nodejs className="w-10 h-10" /> Nodejs</Carousel.Item>
              <Carousel.Item><Go className="w-10 h-10" /> Go</Carousel.Item>
              <Carousel.Item><Java className="w-10 h-10" /> Java</Carousel.Item>
              <Carousel.Item><Docker className="w-10 h-10" /> Docker</Carousel.Item>
              <Carousel.Item><Postgresql className="w-10 h-10" /> Postgresql</Carousel.Item>
              <Carousel.Item><Mongodb className="w-10 h-10" /> Mongodb</Carousel.Item>
            </Carousel.DuplicateItems>
          </Carousel>
        </div>
      </div>


      <Glow className="from-blue-500/95 left-0 top-0"/>
      <Glow className="from-blue-500/95 right-0 bottom-0"/>

    </Section>
  );
};
export default Home;