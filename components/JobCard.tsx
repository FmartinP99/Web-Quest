import Image from "next/image";
import React from "react";
import defaultImg from "@/public/job_image_fallback.svg";
import coolImg from "@/public/cool 1.svg";

interface JobCardProps {
  title?: string;
  company?: string;
  type?: string[];
  industry?: string[];
  location?: string;
  level?: string;
  excerpt?: string;
  url?: string;
  companyLogo?: string;
  featured?: boolean;
  recommended?: boolean;
  trending?: boolean;
}

const JobCard: React.FC<JobCardProps> = ({
  title,
  company,
  type,
  industry,
  location,
  level,
  excerpt,
  url,
  companyLogo,
  featured = false,
  recommended = false,
  trending = false,
}: JobCardProps) => {
  const isPremium = recommended || featured || trending;
  const premiumText = recommended
    ? "Recommended"
    : featured
      ? "Featured"
      : "Trending";

  return (
    <div
      className={`cursor-default rounded-xl p-4 md:p-6 gap-4 min-h-93 w-full  md:w-74  md:h-97 relative border transition-colors flex flex-col items-start
        ${
          isPremium
            ? "bg-linear-to-b from-blue-500 to-custom-purple text-white"
            : "bg-custom-default-card-bg text-black"
        }`}
    >
      <div>
        {/*logo */}
        <div className="h-12 w-12">
          <div className="w-full h-full  bg-white/20 rounded-xl flex items-center justify-center">
            <Image
              className="object-cover"
              src={companyLogo ?? defaultImg}
              alt={title ?? "Not available"}
              width="48"
              height="48"
            />
          </div>
        </div>

        {isPremium && (
          <div className="absolute top-6 right-6 bg-white text-custom-navy text-xs font-semibold p-2 rounded-full flex items-center gap-1.5 shadow-md">
            <Image
              className="object-cover"
              src={coolImg}
              alt="Not available"
              width="16"
              height="16"
            />{" "}
            {premiumText}
          </div>
        )}
      </div>

      <div>
        {/*title */}
        <h2 className="text-lg font-bold  line-clamp-2 h-13 leading-normal ">
          {title}
        </h2>
        {/*company */}
        <p
          className={`mt-2 h-5 text-sm opacity-95
            ${isPremium ? " text-white" : " text-gray-600"}
            `}
        >
          {company}
        </p>
      </div>

      {/*tags */}
      <div className="h-12">
        <div className="overflow-hidden flex flex-wrap gap-2 h-full content-start">
          {[...(type || []), location, level, ...(industry || [])]
            .filter(Boolean)
            .map((val, ix) => (
              <span
                key={ix}
                className={`h-[1.7em] text-xs px-3 rounded-full border  font-medium 
              flex items-center justify-center backdrop-blur-sm 
              ${
                isPremium
                  ? "bg-custom-lightblue text-custom-navy border-black"
                  : "bg-white text-black "
              }`}
              >
                {val}
              </span>
            ))}
        </div>
      </div>

      {/*description */}
      <div className="h-15">
        <p className="h-full text-sm opacity-90 line-clamp-3">{excerpt}</p>
      </div>

      {/*view Job Button */}
      <div className="w-full flex ">
        <button
          onClick={() => window.open(url, "_blank", "noopener,noreferrer")}
          className={`ml-auto cursor-pointer text-sm font-medium py-3.5 rounded-md
             active:scale-[0.985] transition-all duration-200 shadow-md w-full h-10 md:w-26 text-center
              flex justify-center items-center
            ${
              isPremium
                ? "bg-white text-custom-navy hover:bg-white/95"
                : "bg-black/80 text-white hover:bg-gray-800"
            }`}
        >
          View job
        </button>
      </div>
    </div>
  );
};

export default JobCard;
