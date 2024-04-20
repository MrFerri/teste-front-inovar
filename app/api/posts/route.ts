import { NextResponse } from "next/server";
import data from "../api_data.json";

export async function GET() {
    return NextResponse.json(data?.posts, { status: 200 });
}
