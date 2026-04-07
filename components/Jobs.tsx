"use client";

import { JobFilters } from "@/types/job.types";
import JobsList from "./JobsList";
import { useJobs } from "@/hooks/useJobs";
import JobsListSkeleton from "./skeletons/JobListSkeleton";

interface JobsProps {
  jobsFilter?: JobFilters;
}

export default function Jobs({ jobsFilter }: JobsProps) {
  const { data, isLoading, error } = useJobs(jobsFilter ?? null);

  if (isLoading) {
    return (
      <div className="max-w-7xl py-3">
        <JobsListSkeleton />
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full flex flex-col items-center justify-center py-20 text-center px-6">
        <h2 className="text-xl font-semibold mb-2">
          Something went wrong while searching for jobs...
        </h2>
      </div>
    );
  }

  return (
    <div className="max-w-7xl py-3">
      <JobsList jobs={data?.jobs} />
    </div>
  );
}
