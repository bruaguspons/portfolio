import { greyBgSubjectManager } from "@/services/greyBg.srvice";

const CloseSocialMediaPanel = (): React.ReactNode => {
  return (
    <button
      onClick={() => greyBgSubjectManager.setSubject(false)}
      className="w-8 sm:w-6 aspect-square m-[10%] fixed group cursor-pointer"
    >
      <div
        className={`absolute top-0 left-0 right-0 bottom-0 m-auto h-1/6 w-full rounded-full transition duration-150 bg-neutral-50 rotate-45 bg-background-100 group-hover:bg-linear-to-r group-hover:from-blue-500 group-hover:to-sky-500
        
        group-active:bg-linear-to-r group-active:from-blue-500 group-active:to-sky-500
        `}
      >
      </div>
      <div
        className={`absolute top-0 left-0 right-0 bottom-0 m-auto h-1/6 w-full rounded-full transition duration-150 bg-neutral-50 -rotate-45 bg-background-100 group-hover:bg-linear-to-r group-hover:from-blue-500 group-hover:to-sky-500
        
        group-active:bg-linear-to-r group-active:from-blue-500 group-active:to-sky-500
        `}
      >
      </div>
    </button>
  );
};
export default CloseSocialMediaPanel;