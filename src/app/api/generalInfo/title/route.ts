import { getTitle } from "@/service/generalInfo";
import { NextResponse } from "next/server";

export async function GET() {
  return getTitle().then((data) => NextResponse.json(data));
}
