import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { PrimaryButton } from 'src/components/buttons/PrimaryButton';
import { useNavigate } from 'react-router-dom';
import { ButtonSpinner } from '../ui/Spinner';
import {
  loginSchema,
  LoginSchemaType,
  resultsSchema,
} from '../schema/sign-in-schema';
import { options } from 'src/api/config/api-options';
import { AuthFeedback } from '../feedback/AuthFeedback';
import { useApiError } from 'src/api/hooks/use-api-error.hook';

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LoginSchemaType>({ resolver: zodResolver(loginSchema) });
  const [error, handleError, clearError] = useApiError();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (data: LoginSchemaType) => {
    setLoading(true);
    fetch('https://v2.api.noroff.dev/auth/login', {
      method: 'POST',
      body: options.body(data),
      headers: options.headers,
    })
      .then((response) => response.json())
      .then((results) => {
        console.log(results);
        if (results.errors) {
          throw new Error(results.errors[0].message);
        }
        const parsedResults = resultsSchema.safeParse(results.data);
        if (!parsedResults.success) console.error(parsedResults.error);
        const user = {
          name: results.data.name,
          email: results.data.email,
          avatar: results.data.avatar,
          bio: results.data.bio,
        };
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('token', results.data.accessToken);
        clearError();
        setLoading(false);
        reset();
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        const errorMessage =
          error instanceof Error ? error.message : 'Invalid email or password';
        handleError(errorMessage);
      });
  };

  console.log(error);
  return (
    <form className="auth-form" onSubmit={handleSubmit(onSubmit)}>
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

        <div className=" min-h-[2.5vh]">
          {errors?.email?.message && (
            <AuthFeedback variant={'error'}>
              {errors.email.message}
            </AuthFeedback>
          )}

          {error && <AuthFeedback variant={'error'}>{error}</AuthFeedback>}
        </div>
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

        <div className=" min-h-[2.5vh]">
          {errors?.password?.message && (
            <AuthFeedback variant={'error'}>
              {errors.password.message}
            </AuthFeedback>
          )}
          {error && <AuthFeedback variant={'error'}>{error}</AuthFeedback>}
        </div>
      </div>

      <PrimaryButton type="submit" width="full">
        {loading ? <ButtonSpinner /> : 'Sign in'}
      </PrimaryButton>
    </form>
  );
};
