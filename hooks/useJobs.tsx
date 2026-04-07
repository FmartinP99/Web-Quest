import { fetchJobs } from "@/lib/jobicyApi";
import { JobFilters, JobicyResponse } from "@/types/job.types";
import { useQuery } from "@tanstack/react-query";

interface UseJobsReturn {
  data?: JobicyResponse;
  isLoading: boolean;
  error: unknown;
  refetch: () => void;
}

export function useJobs(jobFilters: JobFilters | null): UseJobsReturn {
  const { data, isLoading, error, refetch } = useQuery<JobicyResponse>({
    queryKey: ["jobs", jobFilters],
    queryFn: () => fetchJobs(jobFilters),
  });

  return { data, isLoading, error, refetch };
}
