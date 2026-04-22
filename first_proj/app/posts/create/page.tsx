'use client';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useRouter } from 'next/navigation';
import styles from './create.module.css';

type CreatePostFormData = {
  title: string;
  body: string;
};

const schema = yup.object({
  title: yup
    .string()
    .min(3, 'Заголовок должен содержать минимум 3 символа')
    .required('Заголовок обязателен'),
  body: yup
    .string()
    .min(10, 'Текст должен содержать минимум 10 символов')
    .required('Текст поста обязателен'),
}).required();

export default function CreatePostPage() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<CreatePostFormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: CreatePostFormData) => {
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, userId: 1 }),
      });

      const newPost = await res.json();

      // ✅ СОХРАНЕНИЕ В localStorage
      const existing = JSON.parse(localStorage.getItem('posts') || '[]');

      const postWithId = {
        ...newPost,
        id: Date.now(), // уникальный id
      };

      localStorage.setItem(
        'posts',
        JSON.stringify([postWithId, ...existing])
      );

      reset(); // очистка формы (приятный бонус)

      router.push('/posts');
    } catch (error) {
      console.error('Ошибка при создании поста:', error);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.header}>
          <button onClick={() => router.back()} className={styles.backButton}>
            ← Назад
          </button>
          <h1 className={styles.title}>Создать пост</h1>
          <p className={styles.subtitle}>
            Заполните форму для создания нового поста
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className={styles.form} noValidate>
          <div className={styles.field}>
            <label className={styles.label}>Заголовок</label>
            <input
              {...register('title')}
              placeholder="Введите заголовок поста..."
              className={`${styles.input} ${errors.title ? styles.inputError : ''}`}
            />
            {errors.title && (
              <p className={styles.error}>{errors.title.message}</p>
            )}
          </div>

          <div className={styles.field}>
            <label className={styles.label}>Текст поста</label>
            <textarea
              {...register('body')}
              placeholder="Напишите содержимое вашего поста..."
              rows={6}
              className={`${styles.textarea} ${errors.body ? styles.inputError : ''}`}
            />
            {errors.body && (
              <p className={styles.error}>{errors.body.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={styles.button}
          >
            {isSubmitting ? 'Публикация...' : 'Опубликовать пост'}
          </button>
        </form>
      </div>
    </div>
  );
}