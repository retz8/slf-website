import { getEggsRemovedByYears } from "@/service/home";
import { NextResponse } from "next/server";

export async function GET() {
  return getEggsRemovedByYears().then((data) => NextResponse.json(data));
}
