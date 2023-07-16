import { getLfTrapsThumbnails } from "@/service/tutorial";
import { NextResponse } from "next/server";

export async function GET() {
  return getLfTrapsThumbnails().then((data) => NextResponse.json(data));
}
