import { getHome } from "@/service/home";
import { NextResponse } from "next/server";

export async function GET() {
  return getHome().then((data) => NextResponse.json(data));
}
