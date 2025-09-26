// components/CommentsClient.tsx
"use client";

import { useEffect, useState } from "react";

type Comment = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};

export default function CommentsClient({ postId }: { postId: string }) {
  const [comments, setComments] = useState<Comment[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    setErr(null);

    fetch(`/api/posts/${postId}/comments`) // relative fetch
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch comments");
        return res.json();
      })
      .then((data) => {
        if (mounted) setComments(data);
      })
      .catch((e: any) => {
        if (mounted) setErr(e.message ?? "Unknown error");
      })
      .finally(() => {
        if (mounted) setLoading(false);
      });

    return () => {
      mounted = false;
    };
  }, [postId]);

  if (loading) return <p>Loading comments…</p>;
  if (err) return <p style={{ color: "red" }}>Error: {err}</p>;
  if (!comments || comments.length === 0) return <p>No comments</p>;

  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {comments.map((c) => (
        <li key={c.id} style={{ borderBottom: "1px solid #eee", padding: 8 }}>
          <div style={{ fontWeight: 700 }}>
            {c.name} <small style={{ color: "#666" }}>({c.email})</small>
          </div>
          <div>{c.body}</div>
        </li>
      ))}
    </ul>
  );
}
