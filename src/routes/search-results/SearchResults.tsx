import { useEffect, useState } from 'react';
import {
  filterLocation,
  FilterLocationProps,
} from 'src/components/search/search-inputs/filters/filter-location';
import { useRecursiveDataFetcher } from 'src/state/apiStore';
import { useNavigate } from 'react-router-dom';
export const SearchResults = () => {
  const navigate = useNavigate();
  const { query, fetcherData, clearStateQuery } = useRecursiveDataFetcher();
  const [data, setData] = useState<FilterLocationProps[]>([]);
  useEffect(() => {
    const location = query.split('=')[1];

    const filterLocationData = () => {
      if (location) {
        console.log('user is searching');
        const locationData = filterLocation(fetcherData, location);
        setData(locationData);
      } else {
        console.log('user is not searching');
        navigate(`/search`);
        clearStateQuery();
        setData([]);
      }
    };

    filterLocationData();
  }, [query]);
  console.log(data);
  return <div>Search container</div>;
};
