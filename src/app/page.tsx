// src/app/page.tsx
import Link from "next/link";

export default function HomePage() {
  // ตัวอย่าง post id ที่เราต้องการโชว์
  const posts = [1, 8, 10, 79];

  return (
    <main style={{ padding: 20 }}>
      <h1 style={{ fontSize: 24, marginBottom: 12 }}>Welcome to My Blog</h1>
      <p style={{ marginBottom: 12 }}>เลือก Post เพื่อดู Comments:</p>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {posts.map((id) => (
          <li key={id} style={{ marginBottom: 8 }}>
            <Link 
              href={`/posts/${id}/comments`} 
              style={{ color: "#0070f3", textDecoration: "underline" }}
            >
              ดู comments ของ Post {id}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
