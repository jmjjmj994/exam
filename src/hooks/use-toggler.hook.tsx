import { useState } from 'react';

type TogglerHook = [boolean, () => void, () => void];

export const useToggler = (): TogglerHook => {
  const [toggler, setToggler] = useState(false);
  const handleToggler = () => {
    setToggler((previous) => !previous);
  };

  const setTogglerFalse = () => {
    setToggler(false);
  };

  return [toggler, handleToggler, setTogglerFalse];
};
