'use client';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useRouter } from 'next/navigation';
import styles from './page.module.css';

type RegisterFormData = {
  user_name: string;
  email: string;
  age: number;
  password: string;
  confirm_password: string;
};

const schema = yup.object({
  user_name: yup
    .string()
    .min(3, 'Имя пользователя должно содержать минимум 3 символа')
    .required('Имя пользователя обязательно'),
  email: yup
    .string()
    .email('Введите корректный email')
    .required('Email обязателен'),
  age: yup
    .number()
    .positive('Возраст должен быть положительным числом')
    .integer('Возраст должен быть целым числом')
    .min(1, 'Минимальный возраст — 1 год')
    .max(120, 'Максимальный возраст — 120 лет')
    .required('Возраст обязателен')
    .typeError('Введите корректный возраст'),
  password: yup
    .string()
    .min(6, 'Пароль должен содержать минимум 6 символов')
    .required('Пароль обязателен'),
  confirm_password: yup
    .string()
    .oneOf([yup.ref('password')], 'Пароли не совпадают')
    .required('Подтверждение пароля обязательно'),
}).required();

export default function RegisterPage() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (_data: RegisterFormData) => {
    // Успешная валидация — редирект на /posts
    router.push('/posts');
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.header}>
          <h1 className={styles.title}>Регистрация</h1>
          <p className={styles.subtitle}>Создайте свой аккаунт</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className={styles.form} noValidate>
          <div className={styles.field}>
            <label className={styles.label}>Имя пользователя</label>
            <input
              {...register('user_name')}
              placeholder="john_doe"
              className={`${styles.input} ${errors.user_name ? styles.inputError : ''}`}
            />
            {errors.user_name && (
              <p className={styles.error}>{errors.user_name.message}</p>
            )}
          </div>

          <div className={styles.field}>
            <label className={styles.label}>Email</label>
            <input
              {...register('email')}
              type="email"
              placeholder="john@example.com"
              className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
            />
            {errors.email && (
              <p className={styles.error}>{errors.email.message}</p>
            )}
          </div>

          <div className={styles.field}>
            <label className={styles.label}>Возраст</label>
            <input
              {...register('age')}
              type="number"
              placeholder="25"
              className={`${styles.input} ${errors.age ? styles.inputError : ''}`}
            />
            {errors.age && (
              <p className={styles.error}>{errors.age.message}</p>
            )}
          </div>

          <div className={styles.field}>
            <label className={styles.label}>Пароль</label>
            <input
              {...register('password')}
              type="password"
              placeholder="••••••••"
              className={`${styles.input} ${errors.password ? styles.inputError : ''}`}
            />
            {errors.password && (
              <p className={styles.error}>{errors.password.message}</p>
            )}
          </div>

          <div className={styles.field}>
            <label className={styles.label}>Подтвердите пароль</label>
            <input
              {...register('confirm_password')}
              type="password"
              placeholder="••••••••"
              className={`${styles.input} ${errors.confirm_password ? styles.inputError : ''}`}
            />
            {errors.confirm_password && (
              <p className={styles.error}>{errors.confirm_password.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={styles.button}
          >
            {isSubmitting ? 'Загрузка...' : 'Зарегистрироваться'}
          </button>
        </form>
      </div>
    </div>
  );
}