import { registerSchema, RegisterSchemaType } from '../schema/register-schema';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { PrimaryButton } from 'src/components/buttons/PrimaryButton';
import { options } from 'src/api/config/api-options';
import { AuthFeedback } from '../feedback/AuthFeedback';
import { useApiError } from 'src/api/hooks/use-api-error.hook';
import { ButtonSpinner } from '../ui/Spinner';
import { useState } from 'react';
import { directLogin } from './redirectLogin';
import { Link, useNavigate } from 'react-router-dom';
export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<RegisterSchemaType>({ resolver: zodResolver(registerSchema) });

  const [error, handleError, clearError] = useApiError();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (data: RegisterSchemaType) => {
    setLoading(true);
    fetch('https://v2.api.noroff.dev/auth/register', {
      method: 'POST',
      headers: options.headers,
      body: options.body(data),
    })
      .then((response) => response.json())
      .then((results) => {
        if (results.errors) {
          throw new Error(results.errors[0].message);
        }
        clearError();
        return directLogin({ email: data.email, password: data.password });
      })
      .then(() => {
        reset();
        navigate('/');
      })
      .catch((error) => {
        const errorMessage =
          error instanceof Error ? error.message : 'Profile already exists';
        handleError(errorMessage);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="auth-form--container">
        <label className="auth-form--container-label" htmlFor="name">
          name
          <span className="auth-form--container-label--optional">
            (required)
          </span>
        </label>
        <input
          className="auth-form--container-input"
          type="text"
          id="name"
          {...register('name')}
        />
      </div>

      <div className="auth-form--container">
        <label className="auth-form--container-label" htmlFor="email">
          email
          <span className="auth-form--container-label--optional">
            (required)
          </span>
        </label>
        <input
          className="auth-form--container-input"
          type="text"
          id="email"
          {...register('email')}
        />
      </div>

      <div className="auth-form--container">
        <label className="auth-form--container-label" htmlFor="password">
          password
          <span className="auth-form--container-label--optional">
            (required)
          </span>
        </label>
        <input
          className="auth-form--container-input"
          type="password"
          id="password"
          {...register('password')}
        />
      </div>
      <section className="flex flex-col gap-3 my-4  min-h-[14vh] py-2">
        {error && <AuthFeedback variant={'error'}>{error}</AuthFeedback>}

        {errors?.name ? (
          <AuthFeedback variant={'error'}>
            The name must not contain punctuation symbols apart from underscore
          </AuthFeedback>
        ) : (
          <AuthFeedback variant={'success'}>
            The name must not contain punctuation symbols apart from underscore
          </AuthFeedback>
        )}

        {errors?.email ? (
          <AuthFeedback variant={'error'}>
            The email value must be a valid stud.noroff.no email
          </AuthFeedback>
        ) : (
          <AuthFeedback variant={'success'}>
            The email value must be a valid stud.noroff.no email
          </AuthFeedback>
        )}

        {errors?.password ? (
          <AuthFeedback variant={'error'}>
            The password value must be at least 8 characters
          </AuthFeedback>
        ) : (
          <AuthFeedback variant={'success'}>
            The password value must be at least 8 characters
          </AuthFeedback>
        )}
      </section>

      <PrimaryButton type="submit" width="full">
        {loading ? <ButtonSpinner /> : 'Create account'}
      </PrimaryButton>
      <span className="flex gap-2  text-sm md:text-base">
        Already have an account?
        <Link className="underline text-blue-600 " to={'/sign-in'}>
          Sign in
        </Link>
      </span>
    </form>
  );
};
