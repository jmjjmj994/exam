import { Warning, CheckCircle } from 'phosphor-react';

export const AuthFeedback = ({
  variant,
  children,
}: {
  variant: string;
  children: string | JSX.Element | null;
}) => {
  const formFeedback = () => {
    switch (variant) {
      case 'error':
        return (
          <span className="text-red-500 flex items-center gap-1 text-sm md:text-base">
            <Warning className="max-w-[1.5rem] w-full  hidden md:block text-xl" />
            {children}
          </span>
        );

      case 'success':
        return (
          <span className="text-green-700 flex items-center gap-1 text-sm md:text-base">
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
