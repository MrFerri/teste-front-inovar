import { NextRequest, NextResponse } from "next/server";
import data from "./api_data.json";
import { mountPosts } from "@/utils/utils";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const search = searchParams.get("search") || "";
  const order = searchParams.get("order") || "";
  const page = searchParams.get("page") || "1";
  const posts = mountPosts(data?.posts, search, order, parseInt(page));
  return NextResponse.json(posts, { status: 200 });
}
