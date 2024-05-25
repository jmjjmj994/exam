import { Warning, CheckCircle } from 'phosphor-react';

/*  {errors?.email ? (
          <Feedback variant={'error'}>
            The email value must be a valid stud.noroff.no email
          </Feedback>
        ) : (
          <Feedback variant={'success'}>
            The email value must be a valid stud.noroff.no email
          </Feedback>
        )} */
export const RegisterFeedback = ({
  variant,
  children,
}: {
  variant: string;
  children: string;
}) => {
  const formFeedback = () => {
    switch (variant) {
      case 'error':
        return (
          <span className="text-red-500 flex items-center gap-2 text-sm md:text-base">
            <Warning className="max-w-[1.5rem] w-full  hidden md:block text-xl" />
            {children}
          </span>
        );

      case 'success':
        return (
          <span className="text-green-700 flex items-center gap-2 text-sm md:text-base">
            <CheckCircle className="max-w-[1.5rem] w-full  hidden md:block text-xl" />
            {children}
          </span>
        );

      default:
        return <span>default</span>;
    }
  };
  return formFeedback();
};
