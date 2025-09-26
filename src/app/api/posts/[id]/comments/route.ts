// src/app/api/posts/[id]/comments/route.ts
import { NextResponse, NextRequest } from "next/server";

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ id: string }> } // <-- เปลี่ยนตาม signature ใหม่
) {
  const { params } = context;
  const resolvedParams = await params; // await เพื่อดึง { id }

  const { id } = resolvedParams;

  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
  if (!res.ok) {
    return NextResponse.json({ error: "Failed to fetch comments" }, { status: 500 });
  }

  const data = await res.json();
  return NextResponse.json(data);
}
