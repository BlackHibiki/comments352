// src/app/posts/[id]/comments/page.tsx
import CommentsClient from "../../../../components/CommentsClient";



export default function CommentsPageServer({ params }: { params: { id: string } }) {
  const { id } = params;

  return (
    <main style={{ padding: 20 }}>
      <h1 style={{ fontSize: 24, marginBottom: 12 }}>Comments for Post {id}</h1>
      {/* ใช้ Client Component ดึงข้อมูลจาก API route */}
      <CommentsClient postId={id} />
    </main>
  );
}
