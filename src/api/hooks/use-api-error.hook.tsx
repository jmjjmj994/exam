import { useState } from 'react';

export const useApiError = () => {
  const [error, setError] = useState<string | null>(null);

  const handleError = (errorMessage: string) => setError(errorMessage);
  const clearError = () => setError(null);

  return [error, handleError, clearError] as const;
};
