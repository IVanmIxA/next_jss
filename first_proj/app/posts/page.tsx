import type { Metadata } from "next";
import Link from "next/link";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const metadata: Metadata = {
  title: "Посты",
  description: "Список всех публикаций из JSONPlaceholder API.",
};

async function getPosts(): Promise<Post[]> {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "force-cache",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }

  return res.json();
}

export default async function PostsPage() {
  const posts = await getPosts();

  return (
    <div style={{ padding: "60px 40px", maxWidth: "960px" }}>
      {/* Breadcrumb */}
      <div className="breadcrumb">
        <Link href="/">Главная</Link>
        <span>/</span>
        <span style={{ color: "var(--text-dim)" }}>Посты</span>
      </div>

      {/* Заголовок */}
      <div style={{ marginBottom: "48px" }}>
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "11px",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--accent)",
            marginBottom: "16px",
          }}
        >
          ◆ Все публикации
        </p>
        <h1
          style={{
            fontFamily: "var(--font-sans)",
            fontWeight: 800,
            fontSize: "clamp(32px, 5vw, 56px)",
            lineHeight: 0.95,
            letterSpacing: "-0.03em",
            color: "var(--text)",
            marginBottom: "16px",
          }}
        >
          Посты
        </h1>
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "13px",
            color: "var(--text-muted)",
          }}
        >
          {posts.length} записей
        </p>
      </div>

      {/* Список постов */}
      <div
        style={{
          display: "grid",
          gap: "1px",
          background: "var(--border)",
          border: "1px solid var(--border)",
        }}
      >
        {posts.map((post) => (
          <Link
            key={post.id}
            href={`/posts/${post.id}`}
            style={{ textDecoration: "none" }}
          >
            <div
              className="feature-card"
              style={{
                display: "grid",
                gridTemplateColumns: "48px 1fr auto",
                gap: "24px",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              {/* ID */}
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "11px",
                  color: "var(--accent)",
                  letterSpacing: "0.1em",
                }}
              >
                {post.id.toString().padStart(3, "0")}
              </span>

              {/* Контент */}
              <div>
                <h2
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontWeight: 700,
                    fontSize: "15px",
                    color: "var(--text)",
                    marginBottom: "4px",
                    textTransform: "capitalize",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {post.title}
                </h2>
                <p
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "12px",
                    color: "var(--text-muted)",
                    lineHeight: 1.5,
                    overflow: "hidden",
                    display: "-webkit-box",
                    WebkitLineClamp: 1,
                    WebkitBoxOrient: "vertical",
                  }}
                >
                  {post.body}
                </p>
              </div>

              {/* Стрелка */}
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "13px",
                  color: "var(--text-muted)",
                }}
              >
                →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}