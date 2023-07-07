import { getIntroduction } from "@/service/generalInfo";
import { NextResponse } from "next/server";

export async function GET() {
  return getIntroduction().then((data) => NextResponse.json(data));
}
