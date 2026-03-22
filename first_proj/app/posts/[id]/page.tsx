import type { Metadata } from "next";
import Link from "next/link";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

type Props = {
  params: Promise<{ id: string }>;
};

async function getPost(id: string): Promise<Post> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    cache: "force-cache",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch post");
  }

  return res.json();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const post = await getPost(id);

  return {
    title: post.title,
    description: post.body,
  };
}

export default async function PostPage({ params }: Props) {
  const { id } = await params;
  const post = await getPost(id);

  return (
    <div style={{ padding: "60px 40px", maxWidth: "960px" }}>
      {/* Breadcrumb */}
      <div className="breadcrumb">
        <Link href="/posts">Посты</Link>
        <span>/</span>
        <span style={{ color: "var(--text-dim)" }}>
          {post.id.toString().padStart(3, "0")}
        </span>
      </div>

      {/* Основной контент */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "80px",
          alignItems: "start",
        }}
      >
        {/* Левая колонка — визуальная заглушка */}
        <div
          style={{
            aspectRatio: "1",
            background: "var(--bg-3)",
            border: "1px solid var(--border)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              width: "1px",
              height: "100%",
              background: "var(--border)",
              position: "absolute",
              left: "50%",
            }}
          />
          <div
            style={{
              height: "1px",
              width: "100%",
              background: "var(--border)",
              position: "absolute",
              top: "50%",
            }}
          />
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "11px",
              color: "var(--text-muted)",
              letterSpacing: "0.15em",
              position: "relative",
              zIndex: 1,
              background: "var(--bg-3)",
              padding: "8px 16px",
            }}
          >
            POST
          </span>
        </div>

        {/* Правая колонка — данные из API */}
        <div>
          {/* ID и userId */}
          <div
            style={{
              display: "flex",
              gap: "24px",
              marginBottom: "16px",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                color: "var(--accent)",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
              }}
            >
              ID — {post.id.toString().padStart(3, "0")}
            </p>
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                color: "var(--text-muted)",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
              }}
            >
              USER — {post.userId.toString().padStart(3, "0")}
            </p>
          </div>

          {/* Title из API */}
          <h1
            style={{
              fontFamily: "var(--font-sans)",
              fontWeight: 800,
              fontSize: "36px",
              letterSpacing: "-0.02em",
              color: "var(--text)",
              marginBottom: "24px",
              lineHeight: 1.1,
              textTransform: "capitalize",
            }}
          >
            {post.title}
          </h1>

          {/* Divider */}
          <div
            style={{
              borderTop: "1px solid var(--border)",
              paddingTop: "24px",
              marginBottom: "24px",
            }}
          />

          {/* Body из API */}
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "13px",
              color: "var(--text-dim)",
              lineHeight: 1.8,
              marginBottom: "40px",
            }}
          >
            {post.body}
          </p>

          {/* Навигация между постами */}
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {post.id > 1 && (
              <Link
                href={`/posts/${post.id - 1}`}
                className="btn-outline"
                style={{ textAlign: "center" }}
              >
                ← Предыдущий пост
              </Link>
            )}
            <Link
              href={`/posts/${post.id + 1}`}
              className="btn-primary"
              style={{ textAlign: "center", justifyContent: "center" }}
            >
              Следующий пост →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}