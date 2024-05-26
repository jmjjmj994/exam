import { useEffect, useState } from 'react';
import { useApiLoader } from '../hooks/use-api-loader.hook';
import { options } from '../config/api-options';
import { VenueType, venueSchema } from '../validation/venue-schema';
import { useApiError } from '../hooks/use-api-error.hook';
import { venuesSchema } from '../validation/venues-schema';

export const useFetchVenue = (id: string | undefined): [VenueType, boolean] => {
  const [data, setData] = useState<VenueType>({} as VenueType);
  const [error, handleError, clearError] = useApiError();
  const [isLoading, handleIsLoading] = useApiLoader();

  useEffect(() => {
    const fetchData = () => {
      fetch(
        `https://v2.api.noroff.dev/holidaze/venues/${id}?_owner=true&_bookings=true`,
        {
          method: 'GET',
          headers: options.headers,
        }
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error(`${response.statusText}`);
          }
          return response.json();
        })
        .then((results) => {
          const { data }: { data: VenueType } = results;
          const parsedData = venueSchema.safeParse(data);
          if (!parsedData.success) console.error(parsedData.error);
          setData(data);
          clearError();
          handleIsLoading();
        })
        .catch((error) => {
          console.error(error);

          handleIsLoading();
        });
    };
    fetchData();
  }, []);
  return [data, isLoading];
};
