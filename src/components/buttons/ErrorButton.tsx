import styles from './styles.module.css';
type ErrorButtonProps = {
  type: 'submit' | 'button';
  children: string | JSX.Element;
  onClick?: () => void;
  width: string;
};

export const ErrorButton: React.FC<ErrorButtonProps> = ({
  type,
  children,
  onClick,
  width,
}) => {
  switch (width) {
    case 'full':
      return (
        <button
          type={type}
          onClick={onClick}
          className={`${styles.primary_hover__state}  bg-custom-primary inter-semi-bold text-white w-full py-2 rounded-sm`}
        >
          {children}
        </button>
      );

    case 'auto':
      return (
        <button
          type={type}
          onClick={onClick}
          className={`${styles.primary_hover__state}  bg-custom-primary inter-semi-bold text-white w-auto py-2 px-4 rounded-sm`}
        >
          {children}
        </button>
      );
  }
};
