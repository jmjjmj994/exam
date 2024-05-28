import { useState } from 'react';

export const useApiError = () => {
  const [error, setError] = useState<string>('');
  const handleError = (errorMessage: string) => setError(errorMessage);
  const clearError = () => setError('');
  return [error, handleError, clearError] as const;
};
