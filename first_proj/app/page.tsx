import Link from "next/link";

const features = [
  { num: "01", title: "Качество",      text: "Каждая деталь проверена и продумана." },
  { num: "02", title: "Простота",      text: "Ничего лишнего. Только то, что нужно." },
  { num: "03", title: "Долговечность", text: "Создано служить, а не устаревать." },
];

const sections = [
  {
    label: "Products",
    href: "/products",
    num: "01",
    title: "Продукты",
    description: "Минималистичные объекты, созданные с вниманием к каждому миллиметру формы.",
    meta: "3 позиции",
  },
  {
    label: "Posts",
    href: "/posts",
    num: "02",
    title: "Посты",
    description: "Публикации и материалы — мысли в чистом виде, без лишнего шума.",
    meta: "100 записей",
  },
  {
    label: "Tasks",
    href: "/tasks",
    num: "03",
    title: "Задачи",
    description: "Список задач с отслеживанием статуса выполнения в реальном времени.",
    meta: "10 задач",
  },
  {
    label: "Register",
    href: "/register",
    num: "04",
    title: "Регистрация",
    description: "Создайте аккаунт с валидацией данных — имя, email, возраст и пароль.",
    meta: "Лаб. №6",
  },
];

export default function Page() {
  return (
    <div>
      {/* ── Hero ── */}
      <section
        style={{
          minHeight: "calc(100vh - 60px)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 40px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Grid background */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            opacity: 0.4,
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 60% 50% at 50% 60%, transparent 0%, var(--bg) 100%)",
          }}
        />

        <div style={{ position: "relative", maxWidth: "800px" }}>
          <p
            className="animate-fade-up"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "11px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--accent)",
              marginBottom: "28px",
            }}
          >
            ◆ Добро пожаловать
          </p>

          <h1
            className="animate-fade-up animate-fade-up-delay-1"
            style={{
              fontFamily: "var(--font-sans)",
              fontWeight: 800,
              fontSize: "clamp(48px, 8vw, 96px)",
              lineHeight: 0.95,
              letterSpacing: "-0.03em",
              marginBottom: "32px",
              color: "var(--text)",
            }}
          >
            Меньше шума.
            <br />
            <span style={{ color: "var(--text-muted)" }}>Больше смысла.</span>
          </h1>

          <p
            className="animate-fade-up animate-fade-up-delay-2"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "14px",
              color: "var(--text-dim)",
              maxWidth: "420px",
              lineHeight: 1.7,
              marginBottom: "48px",
            }}
          >
            Минималистичные продукты для тех, кто ценит
            форму и функцию в равной мере.
          </p>

          <div
            className="animate-fade-up animate-fade-up-delay-3"
            style={{ display: "flex", gap: "16px", alignItems: "center", flexWrap: "wrap" }}
          >
            <Link href="/products" className="btn-primary">
              Смотреть продукты <span>→</span>
            </Link>
            <Link href="/posts" className="btn-outline">
              Читать посты <span>→</span>
            </Link>
            <Link href="/tasks" className="btn-outline">
              Задачи <span>→</span>
            </Link>
            <Link href="/register" className="btn-outline">
              Регистрация <span>→</span>
            </Link>
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            bottom: "40px",
            right: "40px",
            fontFamily: "var(--font-mono)",
            fontSize: "11px",
            color: "var(--text-muted)",
            letterSpacing: "0.1em",
          }}
        >
          01 / 01
        </div>
      </section>

      {/* ── Navigation Cards ── */}
      <section
        style={{
          padding: "80px 40px",
          borderTop: "1px solid var(--border)",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "11px",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--text-muted)",
            marginBottom: "32px",
          }}
        >
          Разделы
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "1px",
            background: "var(--border)",
            border: "1px solid var(--border)",
          }}
        >
          {sections.map(({ label, href, num, title, description, meta }) => (
            <Link
              key={href}
              href={href}
              style={{ textDecoration: "none" }}
            >
              <div className="feature-card" style={{ height: "100%", cursor: "pointer" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    marginBottom: "20px",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "11px",
                      color: "var(--accent)",
                    }}
                  >
                    {num}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "11px",
                      color: "var(--text-muted)",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                    }}
                  >
                    {label}
                  </span>
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontWeight: 700,
                    fontSize: "22px",
                    marginBottom: "10px",
                    color: "var(--text)",
                  }}
                >
                  {title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "13px",
                    color: "var(--text-dim)",
                    lineHeight: 1.7,
                    marginBottom: "24px",
                  }}
                >
                  {description}
                </p>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    borderTop: "1px solid var(--border)",
                    paddingTop: "16px",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "11px",
                      color: "var(--text-muted)",
                    }}
                  >
                    {meta}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "13px",
                      color: "var(--accent)",
                    }}
                  >
                    →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Features ── */}
      <section
        style={{
          padding: "80px 40px",
          borderTop: "1px solid var(--border)",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1px",
            background: "var(--border)",
            border: "1px solid var(--border)",
          }}
        >
          {features.map(({ num, title, text }) => (
            <div key={num} className="feature-card">
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "11px",
                  color: "var(--accent)",
                  display: "block",
                  marginBottom: "20px",
                }}
              >
                {num}
              </span>
              <h3
                style={{
                  fontFamily: "var(--font-sans)",
                  fontWeight: 700,
                  fontSize: "18px",
                  marginBottom: "10px",
                  color: "var(--text)",
                }}
              >
                {title}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "13px",
                  color: "var(--text-dim)",
                  lineHeight: 1.7,
                }}
              >
                {text}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}