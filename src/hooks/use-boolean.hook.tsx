import { useState } from 'react';

export const useBoolean = (): [boolean, () => void, () => void] => {
  const [active, setActive] = useState(false);

  const setFalse = () => setActive(false);
  const setTrue = () => setActive(true);

  return [active, setFalse, setTrue];
};
