import { getSchedules } from "@/service/schedule";
import { NextResponse } from "next/server";

export async function GET() {
  return getSchedules().then((data) => NextResponse.json(data));
}
