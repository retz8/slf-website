// get all of the faq

import { getSomeFAQs } from "@/service/faq";
import { NextResponse } from "next/server";

// 최적화를 위해 question만 가져오고 [...slug]로 답을 가져오는걸 할 수도 있음. 그러나 지금은 통으로.
export async function GET() {
  return getSomeFAQs().then((data) => NextResponse.json(data));
}
