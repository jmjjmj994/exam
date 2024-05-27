import { useState } from 'react';

export const useApiLoader = (): [boolean, () => void] => {
  const [isLoading, setIsLoading] = useState(true);
  const handleIsLoading = () => {
    setIsLoading(false);
  };

  return [isLoading, handleIsLoading] as const ;
};
