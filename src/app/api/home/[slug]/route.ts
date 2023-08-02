import { getHome, getMainEggImage } from "@/service/home";
import { NextRequest, NextResponse } from "next/server";

type Context = {
  params: {
    slug: string;
  };
};

export async function GET(request: NextRequest, context: Context) {
  const { slug } = context.params;

  switch (slug) {
    case "egg-img":
      return getMainEggImage().then((data) => NextResponse.json(data));
    case "all":
      return getHome().then((data) => NextResponse.json(data));
    default:
      return NextResponse.json({ error: "Invalid API Request" });
  }
}
