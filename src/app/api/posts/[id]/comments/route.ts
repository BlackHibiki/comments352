// src/app/api/posts/[id]/comments/route.ts
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  // fetch จาก external API หรือ DB
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
  
  if (!res.ok) {
    return NextResponse.json({ error: "Failed to fetch comments" }, { status: 500 });
  }

  const data = await res.json();
  return NextResponse.json(data);
}
