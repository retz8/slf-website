import { getMainEggImage } from "@/service/home";
import { NextResponse } from "next/server";

export async function GET() {
  return getMainEggImage().then((data) => NextResponse.json(data));
}
