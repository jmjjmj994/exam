import { registerSchema, RegisterSchemaType } from '../schema/register-schema';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { PrimaryButton } from 'src/components/buttons/PrimaryButton';
import { PlusMinus } from 'phosphor-react';
import { RegisterFeedback } from './RegisterFeedback';

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<RegisterSchemaType>({ resolver: zodResolver(registerSchema) });

  const onSubmit = (data: unknown) => {};

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
        <input className="auth-form--container-input" type="text" id="email" />
      </div>
      <div className="auth-form--container">
        <label className="auth-form--container-label" htmlFor="password">
          password
          <span className="auth-form--container-label--optional">
            (required)
          </span>
        </label>
        <input className="auth-form--container-input" type="text" id="name" />
      </div>
      <section className="flex flex-col gap-3 my-4">
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
        Create account
      </PrimaryButton>
    </form>
  );
};
