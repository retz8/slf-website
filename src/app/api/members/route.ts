import { getAllMembers } from "@/service/member";
import { NextResponse } from "next/server";

export async function GET() {
  return getAllMembers().then((data) => NextResponse.json(data));
}
