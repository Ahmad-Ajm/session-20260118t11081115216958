import { NextResponse } from "next/server";
import { mockCvList } from "@/lib/mocks/cv";

export async function GET() {
  return NextResponse.json(mockCvList, {
    headers: {
      "Cache-Control": "no-store",
    },
  });
}
