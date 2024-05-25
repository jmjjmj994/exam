import { registerSchema, RegisterSchemaType } from '../schema/register-schema';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { PrimaryButton } from 'src/components/buttons/PrimaryButton';
import { options } from 'src/api/config/api-options';
import { RegisterFeedback } from './RegisterFeedback';
import { useApiError } from 'src/api/hooks/use-api-error.hook';
import { useApiLoader } from 'src/api/hooks/use-api-loader.hook';
import { ButtonSpinner } from '../ui/Spinner';
import { useState } from 'react';

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<RegisterSchemaType>({ resolver: zodResolver(registerSchema) });

  const [error, handleError, clearError] = useApiError();
  /* const [isLoading, setIsLoading] = useApiLoader(); */
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: RegisterSchemaType) => {
    setLoading(true);
    fetch('https://v2.api.noroff.dev/auth/register', {
      method: 'POST',
      headers: options.headers,
      body: options.body(data),
    })
      .then((response) => {
        return response.json();
      })
      .then((results) => {
        console.log(results);
        if (results.errors) {
          throw new Error(results.errors[0].message);
        }
        clearError();
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        const errorMessage =
          error instanceof Error ? error.message : 'Profile already exists';
        handleError(errorMessage);
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
        {error && (
          <RegisterFeedback variant={'error'}>{error}</RegisterFeedback>
        )}

        {errors?.name ? (
          <RegisterFeedback variant={'error'}>
            The name must not contain punctuation symbols apart from underscore
          </RegisterFeedback>
        ) : (
          <RegisterFeedback variant={'success'}>
            The name must not contain punctuation symbols apart from underscore
          </RegisterFeedback>
        )}

        {errors?.email ? (
          <RegisterFeedback variant={'error'}>
            The email value must be a valid stud.noroff.no email
          </RegisterFeedback>
        ) : (
          <RegisterFeedback variant={'success'}>
            The email value must be a valid stud.noroff.no email
          </RegisterFeedback>
        )}

        {errors?.password ? (
          <RegisterFeedback variant={'error'}>
            The password value must be at least 8 characters
          </RegisterFeedback>
        ) : (
          <RegisterFeedback variant={'success'}>
            The password value must be at least 8 characters
          </RegisterFeedback>
        )}
      </section>

      <PrimaryButton type="submit" width="full">
        {loading ? <ButtonSpinner /> : 'Create account'}
      </PrimaryButton>
    </form>
  );
};
