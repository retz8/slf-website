import { getBodyParagraphs } from "@/service/generalInfo";
import { NextResponse } from "next/server";

export async function GET() {
  return getBodyParagraphs().then((data) => NextResponse.json(data));
}
