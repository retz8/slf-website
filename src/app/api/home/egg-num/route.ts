import { getEggsRemovedNumber } from "@/service/home";
import { NextResponse } from "next/server";

export async function GET() {
  return getEggsRemovedNumber().then((data) => NextResponse.json(data));
}
