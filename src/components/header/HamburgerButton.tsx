import { List } from 'phosphor-react';

type HamburgerButtonProps = {
  onClick: () => void;
};

export const HamburgerButton: React.FC<HamburgerButtonProps> = ({
  onClick,
}) => {
  return (
    <button onClick={onClick} className="md:hidden" type="button">
      <List size={25} aria-label="hamburger menu" />
    </button>
  );
};
