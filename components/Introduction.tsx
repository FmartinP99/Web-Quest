import { ArrowDown } from "lucide-react";
import RemoteJobsBadge from "./RemoteJobsBadge";

export default function Introduction() {
  return (
    <div
      className="max-w-7xl flex flex-col gap-5 items-center px-6 mt-24 
      md:flex-row 
      md:relative
    "
    >
      <div className="md:w-[60%]">
        <RemoteJobsBadge />

        <div className="mt-5">
          <span className="font-semibold text-4xl md:text-6xl text-blue-700">
            Remote IT Jobs <br /> Without Borders
          </span>
        </div>
      </div>

      <div className="w-full md:w-auto md:absolute md:bottom-0 md:right-6 flex flex-col">
        <span className="text-muted-foreground text-lg ">
          Work on global IT projects from anywhere.
        </span>

        <a
          href="#jobs-filter"
          className="mt-8 px-4 mx-auto cursor-pointer text-sm font-medium py-3.5 rounded-md
        active:scale-[0.985] transition-all duration-200 shadow-md h-9 text-center
        flex justify-center items-center
        md:mx-0
        md:self-start
        bg-black/80 text-white hover:bg-gray-800
        "
        >
          Discover jobs <ArrowDown className="ml-2" size={16} />
        </a>
      </div>
    </div>
  );
}
