import { useState } from 'react';
import { useApiError } from 'src/api/hooks/use-api-error.hook';
import { options } from 'src/api/config/api-options';
export const useDeleteVenue = (): [
  string,
  string | null,
  (arg: string) => void
] => {
  const [responseSuccess, setResponseSuccess] = useState('');
  const [error, clearError, handleError] = useApiError();
  const handleDeleteVenue = async (id: string) => {
    fetch(`https://v2.api.noroff.dev/holidaze/venues/${id}`, {
      method: 'DELETE',
      headers: options.headers,
    })
      .then(async (response) => {
        if (!response.ok) {
          throw new Error(`${response.statusText} error in delete-fetch.ts`);
        }
        if (response.status === 204) {
          setResponseSuccess(`Successfully deleted venue`);
          window.location.reload();

          return;
        }
        const results = await response.json();
        console.log(results);
        window.location.reload();

        setResponseSuccess(`Successfully deleted venue`);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return [responseSuccess, error, handleDeleteVenue] as const;
};
