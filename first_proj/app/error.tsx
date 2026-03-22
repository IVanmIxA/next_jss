"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
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
          color: "#e84747",
          marginBottom: "16px",
        }}
      >
        ● Ошибка
      </p>
      <h2
        style={{
          fontFamily: "var(--font-sans)",
          fontWeight: 700,
          fontSize: "24px",
          color: "var(--text)",
          marginBottom: "12px",
        }}
      >
        Что-то пошло не так
      </h2>
      <p
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "12px",
          color: "var(--text-muted)",
          marginBottom: "40px",
          maxWidth: "400px",
        }}
      >
        {error?.message || "Произошла непредвиденная ошибка."}
      </p>
      <button
        onClick={reset}
        style={{
          padding: "14px 28px",
          background: "var(--accent)",
          color: "var(--bg)",
          border: "none",
          fontFamily: "var(--font-sans)",
          fontWeight: 700,
          fontSize: "12px",
          letterSpacing: "0.08em",
          textTransform: "uppercase",
        }}
      >
        Попробовать снова
      </button>
    </div>
  );
}