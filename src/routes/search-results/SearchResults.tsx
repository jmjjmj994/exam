import { useEffect, useState } from 'react';
import { filterLocation } from 'src/components/search/search-inputs/filters/filter-location';
import { useRecursiveDataFetcher } from 'src/state/apiStore';
export const SearchResults = () => {
  const { fetcherData } = useRecursiveDataFetcher();
  const [query, setQuery] = useState(
    new URLSearchParams(window.location.search)
  );
  const [data, setData] = useState([]);

  useEffect(() => {
    const filterLocationData = () => {
      const filteredData = [];
      for (const [key, value] of query.entries()) {
        const locationData = filterLocation(fetcherData, value);
        filteredData.push(...locationData);
      }
      return filteredData;
    };
    const locationData = filterLocationData();
    setData(locationData);
  }, [query]);
console.log(data)
  return <div>Search container</div>;
};
