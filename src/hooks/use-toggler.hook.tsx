import { useState } from 'react';

type TogglerHook = [boolean, () => void];

export const useToggler = (): TogglerHook => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle((previous) => !previous);
  };

  return [toggle, handleToggle];
};
