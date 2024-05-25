import { X } from 'phosphor-react';
type NavbarButtonProps = {
  onClick: () => void;
};
export const NavbarButton: React.FC<NavbarButtonProps> = ({ onClick }) => (
  <div className=" flex justify-end h-[5rem]">
    <button className="" onClick={onClick} type="button">
      <X size={25} />
    </button>
  </div>
);
