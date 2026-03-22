'use client';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <h2>Произошла глобальная ошибка</h2>
        <button onClick={reset}>Повторить</button>
      </body>
    </html>
  );
}