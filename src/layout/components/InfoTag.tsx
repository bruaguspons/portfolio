import { greyBgSubjectManager } from "@/services/greyBg.srvice";

const InfoTag = (): React.ReactNode => {
  return (
    <button
      id="infoTag"
      onClick={() => greyBgSubjectManager.setSubject(true)}
      aria-label="Info Tag"
      className="fixed bottom-10 right-0 h-14 w-20 bg-linear-to-r from-blue-500 to-sky-500 rounded-s-full translate-x-5 hover:translate-x-0 transition-transform duration-150 z-20 p-1 cursor-pointer"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-full aspect-square"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      ><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path
          d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path><path d="M12 9h.01"
        ></path><path d="M11 12h1v4h1"></path></svg>
    </button>
  );
};
export default InfoTag;