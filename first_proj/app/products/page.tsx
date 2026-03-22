import Link from "next/link";

const products = [
  { id: 1, name: "Объект 001", category: "Аксессуары", price: "4 200 ₽", tag: "Новинка" },
  { id: 2, name: "Объект 002", category: "Техника",    price: "12 800 ₽", tag: null },
  { id: 3, name: "Объект 003", category: "Одежда",     price: "7 500 ₽",  tag: "Лимит" },
];

export default function ProductsPage() {
  return (
    <div style={{ padding: "60px 40px" }}>
      {/* Заголовок */}
      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          marginBottom: "48px",
          paddingBottom: "24px",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div>
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "11px",
              color: "var(--text-muted)",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              marginBottom: "12px",
            }}
          >
            Каталог
          </p>
          <h1
            style={{
              fontFamily: "var(--font-sans)",
              fontWeight: 800,
              fontSize: "42px",
              letterSpacing: "-0.02em",
              color: "var(--text)",
            }}
          >
            Продукты
          </h1>
        </div>
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "12px",
            color: "var(--text-muted)",
          }}
        >
          {products.length} позиции
        </span>
      </div>

      {/* Список */}
      <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: "var(--border)" }}>
        {products.map((product, i) => (
          <Link key={product.id} href={`/products/${product.id}`} className="product-row">
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                color: "var(--text-muted)",
              }}
            >
              {String(i + 1).padStart(2, "0")}
            </span>

            <div>
              <div
                style={{
                  fontFamily: "var(--font-sans)",
                  fontWeight: 600,
                  fontSize: "16px",
                  color: "var(--text)",
                  marginBottom: "4px",
                }}
              >
                {product.name}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "12px",
                  color: "var(--text-muted)",
                }}
              >
                {product.category}
              </div>
            </div>

            {product.tag ? (
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "10px",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--accent)",
                  border: "1px solid var(--accent)",
                  padding: "4px 10px",
                }}
              >
                {product.tag}
              </span>
            ) : (
              <span />
            )}

            <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "14px",
                  color: "var(--text)",
                  fontWeight: 500,
                  minWidth: "90px",
                  textAlign: "right",
                }}
              >
                {product.price}
              </span>
              <span style={{ color: "var(--text-muted)", fontSize: "18px" }}>→</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
