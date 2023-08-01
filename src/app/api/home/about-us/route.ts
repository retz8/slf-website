import { getAboutUs } from "@/service/home";
import { NextResponse } from "next/server";

export async function GET() {
  return getAboutUs().then((data) => NextResponse.json(data));
}
