import { JobFilters } from "@/types/job.types";
import JobsFilter from "./JobsFilter";
import Jobs from "./Jobs";
import Introduction from "./Introduction";
import Image from "next/image";
import homeImg from "@/public/jobs_welcome_img.svg";
import backgroundImg from "@/public/Hero_Image.png";

interface JobsProps {
  jobsFilter?: JobFilters;
}

export default function HomePage({ jobsFilter }: JobsProps) {
  return (
    <div
      className="mx-auto max-w-332 flex flex-col gap-6 cursor-default"
      style={{
        backgroundImage: `url(${backgroundImg.src})`,
        backgroundSize: "100% 40%",
        backgroundPosition: "bottom left",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Introduction />
      <div className="mt-12 items-center px-6 max-w-7xl">
        <Image className="object-cover" src={homeImg} alt="Not available" />
      </div>
      <div id="jobs-filter">
        <JobsFilter jobsFilter={jobsFilter} />
      </div>
      <Jobs jobsFilter={jobsFilter} />
    </div>
  );
}
