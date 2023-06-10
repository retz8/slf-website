import { getGeneralInfo } from "@/service/generalInfo";
import { NextResponse } from "next/server";

export async function GET() {
  return getGeneralInfo().then((data) => NextResponse.json(data));
}
