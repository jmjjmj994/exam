import { useApiLoader } from '../hooks/use-api-loader.hook';
import { useApiError } from '../hooks/use-api-error.hook';
import { useEffect, useState } from 'react';
import { options } from '../config/api-options';
import { ProfileSchemaType, profileSchema } from '../validation/profile-schema';

export const useFetchProfile = (
  username: string
): [ProfileSchemaType, boolean, string] => {
  const [data, setData] = useState<ProfileSchemaType>(profileSchema.parse({}));
  const [isLoading, handleIsLoading] = useApiLoader();
  const [ error, setError,clearError] = useApiError();

  useEffect(() => {
    fetch(
      `https://v2.api.noroff.dev/holidaze/profiles/${username}?_bookings=true`,
      {
        headers: options.headers,
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(`${response.statusText} error`);
        }
        return response.json();
      })
      .then((results) => {
        const { data }: { data: ProfileSchemaType } = results;
        const parsedData = profileSchema.safeParse(data);

        if (!parsedData.success)
          console.error('Parsing error in useFetchProfile hook');
        setData(data);
        handleIsLoading();
        clearError();
      })
      .catch((error) => {
        console.log(error);
        setError(error)
        handleIsLoading();
      });
  }, []);

  return [data, isLoading, error];
};
