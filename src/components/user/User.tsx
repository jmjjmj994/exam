import { UserCircle } from 'phosphor-react';

type UserProps = {
  onClick: () => void;
};

export const User: React.FC<UserProps> = ({ onClick }) => {
  return (
    <button onClick={() => onClick()}>
      <UserCircle size={25} />
    </button>
  );
};
