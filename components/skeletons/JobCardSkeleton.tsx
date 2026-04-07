export default function JobCardSkeleton() {
  return (
    <div className="rounded-xl p-4 md:p-6 gap-4 min-h-93 w-full md:w-74 md:h-97 relative border flex flex-col items-start animate-pulse bg-custom-default-card-bg">
      {/*logo */}
      <div>
        <div className="h-12 w-12">
          <div className="w-full h-full bg-gray-300 rounded-xl" />
        </div>

        {/*premium badge placeholder */}
        <div className="absolute top-6 right-6 h-8 w-24 bg-gray-300 rounded-full" />
      </div>

      {/*title + company */}
      <div className="w-full">
        {/*title */}
        <div className="h-5 bg-gray-300 rounded w-3/4 mb-2" />
        <div className="h-5 bg-gray-300 rounded w-2/3" />

        {/*company */}
        <div className="mt-2 h-4 bg-gray-300 rounded w-1/2" />
      </div>

      {/*tags */}
      <div className="h-12 w-full">
        <div className="flex flex-wrap gap-2">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="h-[1.7em] w-16 bg-gray-300 rounded-full" />
          ))}
        </div>
      </div>

      {/*description */}
      <div className="h-15 w-full space-y-2">
        <div className="h-3 bg-gray-300 rounded w-full" />
        <div className="h-3 bg-gray-300 rounded w-5/6" />
        <div className="h-3 bg-gray-300 rounded w-2/3" />
      </div>

      {/*button */}
      <div className="w-full flex">
        <div className="w-full h-10 md:w-26 bg-gray-300 rounded-md ml-auto" />
      </div>
    </div>
  );
}
