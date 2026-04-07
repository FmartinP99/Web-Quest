import HomePage from "@/components/HomePage";
import { fetchJobs } from "@/lib/jobicyApi";
import { Industry, JobFilters, JobGeo } from "@/types/job.types";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

interface HomeProps {
  searchParams: { geo?: string; industry?: string };
}

export default async function Home({ searchParams }: HomeProps) {
  const params = await searchParams;

  const filters: JobFilters = {
    geo: params.geo as JobGeo | undefined,
    industry: params.industry as Industry | undefined,
  };

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["jobs", filters],
    queryFn: () => fetchJobs(filters),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <HomePage jobsFilter={filters} />
    </HydrationBoundary>
  );
}
