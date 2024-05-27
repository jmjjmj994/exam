//        `https://v2.api.noroff.dev/holidaze/venues/?_owner=true&_bookings=true&page=${currentPage}`,

import { useEffect, useState } from 'react';
import { options } from 'src/api/config/api-options';

export const useSearchLocation = () => {
  const [data, setData] = useState([]);
  const [meta, setMeta] = useState({});

  const fetchData = async (query: string) => {
    console.log(query);
    try {
      const response = await fetch(
        `https://v2.api.noroff.dev/holidaze/venues/search?q=${query}&_owner=true&_bookings=true`,
        {
          headers: options.headers,
        }
      );
      if (!response.ok) {
        throw new Error(
          `${response.statusText}: Error in useSearchVenues hook`
        );
      }

      const { data, meta } = await response.json();
      setData(data);
      setMeta(meta);
    } catch (error) {
      console.log(error);
    }
  };

  return [data, meta, fetchData];
};
