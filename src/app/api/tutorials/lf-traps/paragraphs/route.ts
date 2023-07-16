import { getLfTrapsParagraphs } from "@/service/tutorial";
import { NextResponse } from "next/server";

export async function GET() {
  return getLfTrapsParagraphs().then((data) => NextResponse.json(data));
}
