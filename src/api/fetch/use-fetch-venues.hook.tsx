import { useEffect, useState } from 'react';
import { useApiLoader } from '../hooks/use-api-loader.hook';
import { useApiError } from '../hooks/use-api-error.hook';
import { VenuesType, venuesSchema } from '../validation/venues-schema';
import { MetaType, metaSchema } from '../validation/meta-schema';
import { options } from '../config/api-options';

const initialMeta = {
  isFirstPage: false,
  isLastPage: false,
  currentPage: 0,
  previousPage: null,
  nextPage: null,
  pageCount: 0,
  totalCount: 0,
};

export const useFetchVenues = (page: number) => {
  const [data, setData] = useState({
    data: [] as VenuesType,
    meta: initialMeta as MetaType,
  });
  const [isLoading, handleIsLoading] = useApiLoader();
  const [error, handleError, clearError] = useApiError();
  const [currentPage, setCurrentPage] = useState(page);

  useEffect(() => {
    const fetchData = () => {
      fetch(
        `https://v2.api.noroff.dev/holidaze/venues/?_owner=true&_bookings=true&page=${currentPage}`,
        {
          method: 'GET',
          headers: options.headers,
        }
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response not ok');
          }
          return response.json();
        })
        .then((result) => {
          const { data, meta }: { data: VenuesType; meta: MetaType } = result;
          const parsedData = venuesSchema.safeParse(data);
          const parsedMeta = metaSchema.safeParse(meta);
          if (!parsedData.success && !parsedMeta.success)
            console.error(parsedData.error, parsedMeta.error);
          setData({ data: data, meta: meta });
          clearError();
          handleIsLoading();
        })
        .catch((err) => {
          console.log(err);
          handleIsLoading();
        });
    };
    fetchData();
  }, [currentPage]);

  return { data, isLoading, error, handleError };
};
