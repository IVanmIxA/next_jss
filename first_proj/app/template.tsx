import { ReactNode } from "react";

export default function Template({ children }: { children: ReactNode }) {
  return (
    <div
      className="animate-fade-up"
      style={{ animation: "fadeUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) both" }}
    >
      {children}
    </div>
  );
}