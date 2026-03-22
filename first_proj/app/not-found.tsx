import Link from "next/link";

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "40px",
      }}
    >
      <p
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "11px",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "var(--accent)",
          marginBottom: "24px",
        }}
      >
        Ошибка 404
      </p>

      <h1
        style={{
          fontFamily: "var(--font-sans)",
          fontWeight: 800,
          fontSize: "clamp(64px, 12vw, 140px)",
          letterSpacing: "-0.04em",
          lineHeight: 1,
          color: "var(--bg-3)",
          marginBottom: "32px",
          userSelect: "none",
        }}
      >
        404
      </h1>

      <p
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "14px",
          color: "var(--text-muted)",
          marginBottom: "48px",
        }}
      >
        Страница не существует или была удалена.
      </p>

      <Link
        href="/"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "10px",
          padding: "14px 28px",
          border: "1px solid var(--border)",
          fontFamily: "var(--font-mono)",
          fontSize: "12px",
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: "var(--text-dim)",
          transition: "border-color 0.2s, color 0.2s",
        }}
      >
        ← На главную
      </Link>
    </div>
  );
}
