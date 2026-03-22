"use client";

import { useState } from "react";

type Props = {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
};

const TaskCard = ({ id, userId, title, completed }: Props) => {
  const [isCompleted, setIsCompleted] = useState(completed);

  return (
    <div
      onClick={() => setIsCompleted((prev) => !prev)}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "16px",
        padding: "18px 22px",
        borderRadius: "14px",
        background: isCompleted ? "#f0fdf4" : "#ffffff",
        border: `1.5px solid ${isCompleted ? "#86efac" : "#e5e7eb"}`,
        cursor: "pointer",
        transition: "all 0.2s ease",
        boxShadow: isCompleted
          ? "0 2px 12px rgba(34,197,94,0.10)"
          : "0 2px 8px rgba(0,0,0,0.05)",
      }}
    >
      {/* Иконка статуса */}
      <div style={{ flexShrink: 0 }}>
        {isCompleted ? (
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
            <circle cx="13" cy="13" r="12" fill="#22c55e" />
            <path
              d="M8 13.5l3.5 3.5 6.5-7"
              stroke="white"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : (
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
            <circle cx="13" cy="13" r="11.5" stroke="#d1d5db" strokeWidth="1.5" />
          </svg>
        )}
      </div>

      {/* Текст */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <p
          style={{
            margin: 0,
            fontWeight: 600,
            fontSize: "15px",
            color: isCompleted ? "#6b7280" : "#111827",
            textDecoration: isCompleted ? "line-through" : "none",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            transition: "all 0.2s",
          }}
        >
          {title}
        </p>
        <p style={{ margin: "3px 0 0", fontSize: "12px", color: "#9ca3af" }}>
          ID: {id} &nbsp;•&nbsp; User: {userId}
        </p>
      </div>

      {/* Бейдж статуса */}
      <span
        style={{
          flexShrink: 0,
          padding: "5px 14px",
          borderRadius: "999px",
          fontSize: "12px",
          fontWeight: 700,
          background: isCompleted ? "#111827" : "transparent",
          color: isCompleted ? "#ffffff" : "#6b7280",
          border: isCompleted ? "none" : "1.5px solid #e5e7eb",
          transition: "all 0.2s",
        }}
      >
        {isCompleted ? "Completed" : "In Progress"}
      </span>
    </div>
  );
};

export default TaskCard;