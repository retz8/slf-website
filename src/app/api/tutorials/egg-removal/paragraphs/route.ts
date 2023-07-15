import { getEggRemovalParagraphs } from "@/service/tutorial";
import { NextResponse } from "next/server";

export async function GET() {
  return getEggRemovalParagraphs().then((data) => NextResponse.json(data));
}
