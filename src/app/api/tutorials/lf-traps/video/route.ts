import { getLfTrapsVideoTutorial } from "@/service/tutorial";
import { NextResponse } from "next/server";

export async function GET() {
  return getLfTrapsVideoTutorial().then((data) => NextResponse.json(data));
}
