import { useEffect, useState } from 'react';
import { filterLocation } from 'src/components/search/search-inputs/filters/filter-location';
import { useRecursiveDataFetcher } from 'src/state/apiStore';
export const SearchResults = () => {
  const { query, fetcherData } = useRecursiveDataFetcher();
  const [data, setData] = useState([]);
  const searchParams = new URLSearchParams(query);

  useEffect(() => {
    const location = query.split('=')[1];

    const filterLocationData = () => {
      if (location) {
        console.log('user is searching');
        const locationData = filterLocation(fetcherData, location);
        setData(locationData);
      } else {
        console.log('user is not searching');
        setData([]); 
      }
    };

    filterLocationData();
    
  }, [query]);
console.log(data)
  return <div>Search container</div>;
};
