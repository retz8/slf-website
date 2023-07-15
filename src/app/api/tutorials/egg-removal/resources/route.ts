import { getEggRemovalOtherResources } from "@/service/tutorial";
import { NextResponse } from "next/server";

export async function GET() {
  return getEggRemovalOtherResources().then((data) => NextResponse.json(data));
}
