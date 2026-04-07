"use client";

import { NO_FILTER } from "@/types/filters.types";
import SelectList from "./SelectList";
import {
  GEO_VALUES,
  Industry,
  INDUSTRY_VALUES,
  JobFilters,
  JobGeo,
} from "@/types/job.types";
import { useJobFilters } from "@/hooks/useJobFilters";

interface JobFilterProps {
  jobsFilter?: JobFilters;
}

export default function JobsFilter({ jobsFilter }: JobFilterProps) {
  const { updateFilter, resetFilters } = useJobFilters();

  return (
    <div className="flex gap-4 flex-col md:flex-row text-sm font-semibold max-w-7xl px-6">
      <div className="flex flex-col gap-1">
        <span className="font-normal text-xs">Company Location:</span>

        <SelectList
          value={jobsFilter?.geo ?? NO_FILTER}
          defaultOption="Worldwide"
          selectOptions={GEO_VALUES}
          className="w-full md:w-57 cursor-pointer"
          onChange={(val) => updateFilter("geo", val as JobGeo)}
        />
      </div>

      <div className="flex flex-col gap-1">
        <span className="font-normal text-xs">Industries:</span>

        <SelectList
          value={jobsFilter?.industry ?? NO_FILTER}
          defaultOption="All Industries"
          selectOptions={INDUSTRY_VALUES}
          className="w-full md:w-57 cursor-pointer"
          onChange={(val) => updateFilter("industry", val as Industry)}
        />
      </div>
      <button
        className="md:ml-auto  md:mt-auto text-sm font-semibold cursor-pointer hover:bg-gray-100 p-2 rounded-xl"
        onClick={() => resetFilters()}
      >
        Reset filters
      </button>
    </div>
  );
}
