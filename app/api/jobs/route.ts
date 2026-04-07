import { NextRequest } from "next/server";
import { isJobGeo, isJobIndustry } from "@/types/job.guards";
import { BASE_JOBICY_URL } from "@/config/config";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);

  const geo = searchParams.get("geo");
  const industry = searchParams.get("industry");

  if (geo && !isJobGeo(geo)) {
    return Response.json(
      { error: `Invalid geo filter: "${geo}"` },
      { status: 400 },
    );
  }

  if (industry && !isJobIndustry(industry)) {
    return Response.json(
      { error: `Invalid industry filter: "${industry}"` },
      { status: 400 },
    );
  }

  const params = new URLSearchParams();
  if (geo) params.set("geo", geo);
  if (industry) params.set("industry", industry);

  const url = `${BASE_JOBICY_URL}?${params.toString()}`;

  try {
    const res = await fetch(url, {
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      return Response.json(
        { error: "Upstream API error" },
        { status: res.status },
      );
    }

    const data = await res.json();

    return Response.json(data);
  } catch (err) {
    return Response.json({ error: "Failed to fetch jobs" }, { status: 500 });
  }
}
