import { ReactNode } from "react";
import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "MNML Store",
  description: "Minimal products, maximal quality",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru">
      <body>
        <header className="site-header">
          <Link href="/" className="site-logo">
            MNML
          </Link>

          <nav className="site-nav">
            <Link href="/" className="nav-link">Главная</Link>
            <Link href="/products" className="nav-link">Продукты</Link>
          </nav>

          <div className="status-badge">
            <span className="status-dot" />
            online
          </div>
        </header>

        <main style={{ paddingTop: "60px", minHeight: "100vh" }}>
          {children}
        </main>

        <footer className="site-footer">
          <span className="footer-text">© 2025 MNML</span>
          <span className="footer-text">built with Next.js</span>
        </footer>
      </body>
    </html>
  );
}