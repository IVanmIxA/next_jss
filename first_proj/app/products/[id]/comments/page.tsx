export default async function CommentsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  return (
    <main>
      <h1>Комментарии</h1>
      <p>Идентификатор продукта: {id}</p>
      <p>Раздел комментариев для продукта с ID: {id}</p>
    </main>
  );
}