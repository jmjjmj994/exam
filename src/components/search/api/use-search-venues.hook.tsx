//        `https://v2.api.noroff.dev/holidaze/venues/?_owner=true&_bookings=true&page=${currentPage}`,

import { useEffect, useState } from 'react';

export const useSearchVenues = (url:string, page:number) => {
  const [data, setData] = useState([]);
  const [meta, setMeta] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${url}&page=${page}`);
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
    fetchData();
  }, [url, page]);

  return [data, meta];
};
