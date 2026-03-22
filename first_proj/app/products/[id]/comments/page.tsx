import Link from "next/link";
import type { Metadata } from "next";

const productData: Record<string, { name: string; category: string; price: string; description: string }> = {
  "1": {
    name: "Объект 001",
    category: "Аксессуары",
    price: "4 200 ₽",
    description: "Минималистичный аксессуар без лишних деталей. Создан с вниманием к каждому миллиметру формы и выбору материала.",
  },
  "2": {
    name: "Объект 002",
    category: "Техника",
    price: "12 800 ₽",
    description: "Технологичность в сдержанном корпусе. Функционал превыше всего — без отвлекающих элементов дизайна.",
  },
  "3": {
    name: "Объект 003",
    category: "Одежда",
    price: "7 500 ₽",
    description: "Силуэт, который не требует объяснений. Ограниченный тираж, натуральные материалы, точный крой.",
  },
};

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const product = productData[id];

  if (!product) {
    return {
      title: "Продукт не найден",
      description: "Запрашиваемый продукт не существует.",
    };
  }

  return {
    title: product.name,
    description: product.description,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = productData[id];

  if (!product) {
    return (
      <div
        style={{
          padding: "120px 40px",
          textAlign: "center",
          fontFamily: "var(--font-mono)",
          color: "var(--text-muted)",
        }}
      >
        Продукт не найден.
      </div>
    );
  }

  return (
    <div style={{ padding: "60px 40px", maxWidth: "960px" }}>
      {/* Breadcrumb */}
      <div className="breadcrumb">
        <Link href="/products">Продукты</Link>
        <span>/</span>
        <span style={{ color: "var(--text-dim)" }}>{product.name}</span>
      </div>

      {/* Основной контент */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "80px",
          alignItems: "start",
        }}
      >
        {/* Изображение-заглушка */}
        <div
          style={{
            aspectRatio: "1",
            background: "var(--bg-3)",
            border: "1px solid var(--border)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div style={{ width: "1px", height: "100%", background: "var(--border)", position: "absolute", left: "50%" }} />
          <div style={{ height: "1px", width: "100%", background: "var(--border)", position: "absolute", top: "50%" }} />
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "11px",
              color: "var(--text-muted)",
              letterSpacing: "0.15em",
              position: "relative",
              zIndex: 1,
              background: "var(--bg-3)",
              padding: "8px 16px",
            }}
          >
            {product.category.toUpperCase()}
          </span>
        </div>

        {/* Информация */}
        <div>
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "11px",
              color: "var(--accent)",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              marginBottom: "16px",
            }}
          >
            ID — {id.padStart(3, "0")}
          </p>

          <h1
            style={{
              fontFamily: "var(--font-sans)",
              fontWeight: 800,
              fontSize: "40px",
              letterSpacing: "-0.02em",
              color: "var(--text)",
              marginBottom: "24px",
              lineHeight: 1,
            }}
          >
            {product.name}
          </h1>

          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "13px",
              color: "var(--text-dim)",
              lineHeight: 1.8,
              marginBottom: "40px",
            }}
          >
            {product.description}
          </p>

          <div
            style={{
              borderTop: "1px solid var(--border)",
              paddingTop: "32px",
              marginBottom: "40px",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-sans)",
                fontWeight: 700,
                fontSize: "28px",
                color: "var(--text)",
              }}
            >
              {product.price}
            </span>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <button className="btn-primary" style={{ width: "100%", justifyContent: "center" }}>
              Добавить в корзину
            </button>
            <Link href={`/products/${id}/comments`} className="btn-outline">
              Читать отзывы →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}