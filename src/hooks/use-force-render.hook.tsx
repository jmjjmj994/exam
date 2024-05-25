import { useState } from 'react';

export const useForceRender = (): [number, () => void] => {
  const [forceRenderKey, setForceRenderKey] = useState(0);

  const handleForceRenderKey = () => {
    const nextKey = forceRenderKey + 1;
    setForceRenderKey(nextKey);
  };

  return [forceRenderKey, handleForceRenderKey];
};
