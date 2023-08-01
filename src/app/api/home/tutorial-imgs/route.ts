import { getTutorialsImages } from "@/service/home";
import { NextResponse } from "next/server";

export async function GET() {
  return getTutorialsImages().then((data) => NextResponse.json(data));
}
