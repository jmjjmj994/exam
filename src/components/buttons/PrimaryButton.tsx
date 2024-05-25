import React from 'react';
import styles from './styles.module.css';
type PrimaryButtonProps = {
  type: 'submit' | 'button';
  children: string;
  onClick?: () => void;
  width: string;
};

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
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
          className={`${styles.primary_hover__state}  bg-custom-primary inter-semi-bold text-white w-auto py-2 rounded-sm`}
        >
          {children}
        </button>
      );
  }
};
