'use client';

export default function CurrentDate() {
  const date = new Date().toLocaleString("ru-RU", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  return (
    <span
      style={{
        fontFamily: "var(--font-mono)",
        fontSize: "12px",
        color: "var(--text-muted)",
      }}
    >
      {date}
    </span>
  );
}