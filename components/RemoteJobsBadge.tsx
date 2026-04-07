export default function RemoteJobsBadge() {
  return (
    <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 h-7 rounded-full border border-gray-200 bg-white text-sm whitespace-nowrap">
      <span className="w-2 h-2 rounded-full bg-green-500 shrink-0" />
      <span className="font-medium text-blue-700">Remote jobs</span>
      <span className="text-gray-500 mx-0.2">·</span>
      <span className="text-muted-foreground font-normal">
        200+ new jobs today
      </span>
    </div>
  );
}
