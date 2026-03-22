// ─── loading.tsx ────────────────────────────────────────────────────────────
export default function Loading() {
  return (
    <div
      style={{
        minHeight: "60vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "6px",
          alignItems: "center",
        }}
      >
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            style={{
              width: "4px",
              height: "4px",
              borderRadius: "50%",
              background: "var(--accent)",
              animation: "pulse-dot 1.2s ease-in-out infinite",
              animationDelay: `${i * 0.2}s`,
              display: "inline-block",
            }}
          />
        ))}
      </div>
      <span
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "11px",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "var(--text-muted)",
        }}
      >
        загрузка
      </span>
    </div>
  );
}
