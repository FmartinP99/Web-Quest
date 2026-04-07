import { GEO_VALUES, Industry, INDUSTRY_VALUES, JobGeo } from "./job.types";

export function isJobIndustry(value: string | null): value is Industry {
  if (!value) return false;
  return INDUSTRY_VALUES.includes(value as Industry);
}

export function isJobGeo(value: string | null): value is JobGeo {
  if (!value) return false;
  return GEO_VALUES.includes(value as JobGeo);
}
