"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <html>
      <body
        style={{
          margin: 0,
          background: "#080808",
          color: "#e8e8e8",
          fontFamily: "monospace",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          flexDirection: "column",
          gap: "20px",
          textAlign: "center",
          padding: "40px",
        }}
      >
        <p style={{ color: "#e84747", fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase" }}>
          ● Критическая ошибка
        </p>
        <h1 style={{ fontSize: "24px", fontWeight: 700, fontFamily: "sans-serif" }}>
          Приложение недоступно
        </h1>
        <p style={{ fontSize: "12px", color: "#555", maxWidth: "380px", lineHeight: 1.7 }}>
          {error?.message || "Произошла глобальная ошибка."}
        </p>
        <button
          onClick={reset}
          style={{
            marginTop: "8px",
            padding: "14px 28px",
            background: "#e8ff47",
            color: "#080808",
            border: "none",
            fontWeight: 700,
            fontSize: "12px",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            cursor: "pointer",
          }}
        >
          Перезагрузить
        </button>
      </body>
    </html>
  );
}