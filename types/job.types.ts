export interface Job {
  id: number;
  url: string;
  jobTitle: string;
  companyName: string;
  companyLogo?: string;
  jobGeo: string;
  jobLevel?: string;
  jobType?: string[];
  jobIndustry?: string[];
  salary?: string;
  pubDate: string;
  jobDescription: string;
  jobExcerpt: string;
}

export interface JobicyResponse {
  jobs: Job[];
  jobCount?: number;
}

export const GEO_VALUES = [
  "apac",
  "emea",
  "latam",
  "usa",
  "uk",
  "canada",
  "germany",
  "france",
  "hungary",
  "austria",
  "belgium",
  "brazil",
  "bulgaria",
  "china",
  "croatia",
  "cyprus",
  "czechia",
  "denmark",
  "estonia",
  "europe",
  "finland",
  "greece",
  "ireland",
  "israel",
  "italy",
  "japan",
  "latvia",
  "lithuania",
  "mexico",
  "netherlands",
  "new-zealand",
  "norway",
  "philippines",
  "poland",
  "portugal",
  "romania",
  "serbia",
  "singapore",
  "slovakia",
  "slovenia",
  "south-korea",
  "spain",
  "sweden",
  "switzerland",
  "thailand",
  "turkiye",
  "united-arab-emirates",
  "ukraine",
  "vietnam",
  "argentina",
  "australia",
  "hong-kong",
  "costa-rica",
] as const;

export const INDUSTRY_VALUES = [
  "business",
  "copywriting",
  "healthcare",
  "education",
  "admin-support",
  "supporting",
  "data-science",
  "design-multimedia",
  "admin",
  "accounting-finance",
  "hr",
  "marketing",
  "management",
  "dev",
  "seller",
  "seo",
  "smm",
  "engineering",
  "technical-support",
  "web-app-design",
] as const;

export type Industry = (typeof INDUSTRY_VALUES)[number];
export type JobGeo = (typeof GEO_VALUES)[number];

export interface JobFilters {
  geo?: JobGeo;
  industry?: Industry;
}
