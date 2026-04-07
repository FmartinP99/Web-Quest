import { NO_FILTER } from "@/types/filters.types";
import { isJobGeo, isJobIndustry } from "@/types/job.guards";
import { JobGeo, Industry } from "@/types/job.types";
import { useRouter, useSearchParams } from "next/navigation";

type FilterKey = "geo" | "industry";

export function useJobFilters() {
  const router = useRouter();
  const params = useSearchParams();

  function updateFilter(key: FilterKey, value?: JobGeo | Industry) {
    const newParams = new URLSearchParams(params);

    if (!value || value === NO_FILTER) {
      newParams.delete(key);
      router.push(`?${newParams.toString()}`, { scroll: false });
      return;
    }

    if (key === "geo" && isJobGeo(value)) {
      newParams.set("geo", value);
    } else if (key === "industry" && isJobIndustry(value)) {
      newParams.set("industry", value);
    }

    router.push(`?${newParams.toString()}`, { scroll: false });
  }

  function resetFilters() {
    router.push("?", { scroll: false });
  }

  return {
    updateFilter,
    resetFilters,
  };
}
