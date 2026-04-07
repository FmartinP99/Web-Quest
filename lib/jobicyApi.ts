import { Job, JobFilters, JobicyResponse } from "../types/job.types";
import { splitAndDecode } from "./utils";

export async function fetchJobs(
  filters: JobFilters | null,
): Promise<JobicyResponse> {
  const params = new URLSearchParams();

  if (filters?.geo) params.set("geo", filters.geo);
  if (filters?.industry) params.set("industry", filters.industry);

  const res = await fetch(`/api/jobs?${params.toString()}`);

  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.error || "Failed to fetch jobs");
  }

  const data = await res.json();

  const jobs: Job[] = data.jobs.map((job: Job) => ({
    ...job,
    jobType: job.jobType?.flatMap(splitAndDecode) ?? [],
    jobIndustry: job.jobIndustry?.flatMap(splitAndDecode) ?? [],
  }));

  return { ...data, jobs };
}
