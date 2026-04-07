"use client";

import { Job } from "@/types/job.types";
import JobCard from "./JobCard";
import { getRandomItem } from "@/lib/utils";

interface JobsListParams {
  jobs?: Job[];
}

export default function JobsList({ jobs }: JobsListParams) {
  if (!jobs || jobs.length === 0) {
    return (
      <div className="w-full flex flex-col items-center justify-center py-20 text-center px-6">
        <div className="text-5xl mb-4">🔍</div>

        <h2 className="text-xl font-semibold mb-2">No jobs found</h2>

        <p className="text-gray-500 max-w-md">
          Try adjusting your filters or search criteria to find more
          opportunities.
        </p>
      </div>
    );
  }

  // just for testing the states
  const rndRec = getRandomItem(jobs.slice(0, 8));
  const rndTren = getRandomItem(jobs.slice(0, 8));
  const rndFea = getRandomItem(jobs.slice(0, 8));

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 place-items-center px-6">
      {jobs?.map((job) => (
        <JobCard
          key={job.id}
          title={job.jobTitle}
          company={job.companyName}
          type={job.jobType}
          industry={job.jobIndustry}
          location={job.jobGeo}
          level={job.jobLevel}
          excerpt={job.jobExcerpt}
          url={job.url}
          companyLogo={job.companyLogo}
          recommended={job.id === rndRec.id}
          trending={job.id === rndTren.id}
          featured={job.id === rndFea.id}
        />
      ))}
    </div>
  );
}
