import { useEffect, useState } from "react";
import { greyBgSubjectManager } from "@/services/greyBg.srvice";
import CloseSocialMediaPanel from "@/layout/components/CloseSocialMediaPanel";
import GradientIcon from "@/layout/icons/GradientIcon";

const SocialMediaPanel = (): React.ReactNode => {
  const [showPanel, setShowPanel] = useState(false);
  useEffect(() => {
    const subject = greyBgSubjectManager.getSubject();
    subject.subscribe((data) => setShowPanel(data));
  }, []);

  return (
    <>
      <div
        className={`fixed h-full w-full sm:w-48 bg-zinc-800 right-0 z-70 sm:rounded-l-3xl sm:shadow-2xl sm:shadow-black transition-transform duration-300 ease-in-out ${showPanel ? "translate-x-0" : "translate-x-full"}`}
      >
        <CloseSocialMediaPanel />
        <div className="flex flex-col h-full w-full justify-evenly items-center">
          <GradientIcon
            gradientName="github-gradient-light"
            desc="Github"
            ariaLabel="Github button"
            href="https://github.com/bruaguspons"
            target="_blank"
            className="flex w-20"
            children={(_color) => (
              <path
                d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"
              />
            )}
          />
          <GradientIcon
            gradientName="linkedin-gradient-dark"
            desc="Linkedin"
            ariaLabel="Linkedin button"
            href="https://www.linkedin.com/in/brunopons/"
            target="_blank"
            className="flex w-20"
            children={(_color) => (
              <path
                d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1 1 68.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z"
              ></path>
            )}
          />
          <GradientIcon
            gradientName="mail-gradient-dark"
            desc="Mail"
            ariaLabel="Mail button"
            href="mailto:bruaguspons@gmail.com"
            target="_blank"
            className="flex w-20"
            children={(_color) => (
              <path
                d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 110.8V792H136V270.8l-27.6-21.5 39.3-50.5 42.8 33.3h643.1l42.8-33.3 39.3 50.5-27.7 21.5zM833.6 232L512 482 190.4 232l-42.8-33.3-39.3 50.5 27.6 21.5 341.6 265.6a55.99 55.99 0 0 0 68.7 0L888 270.8l27.6-21.5-39.3-50.5-42.7 33.2z"
              ></path>
            )}
          />
          <GradientIcon
            gradientName="CV-gradient-dark"
            desc="CV"
            ariaLabel="CV button"
            href={"/CV_BRUNO_PONS_ES.pdf"}
            target="_blank"
            className="flex w-20"
            viewBox="0 0 24 24"
            fill="none"
            children={(color) => (
              <path
                d="M9 17H15M9 13H15M9 9H10M13 3H8.2C7.0799 3 6.51984 3 6.09202 3.21799C5.71569 3.40973 5.40973 3.71569 5.21799 4.09202C5 4.51984 5 5.0799 5 6.2V17.8C5 18.9201 5 19.4802 5.21799 19.908C5.40973 20.2843 5.71569 20.5903 6.09202 20.782C6.51984 21 7.0799 21 8.2 21H15.8C16.9201 21 17.4802 21 17.908 20.782C18.2843 20.5903 18.5903 20.2843 18.782 19.908C19 19.4802 19 18.9201 19 17.8V9M13 3L19 9M13 3V7.4C13 7.96005 13 8.24008 13.109 8.45399C13.2049 8.64215 13.3578 8.79513 13.546 8.89101C13.7599 9 14.0399 9 14.6 9H19"
                stroke={color}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"></path>
            )}
          />
        </div>
      </div>
    </>
  );
};
export default SocialMediaPanel;