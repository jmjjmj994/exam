import { useEffect, useState } from 'react';
import { VenuesCard } from 'src/app/VenuesCard';
import {
  allData,
  filterLocation,
  FilterLocationProps,
} from 'src/components/search/search-inputs/filters/filter-location';
import { useRecursiveDataFetcher } from 'src/state/apiStore';
import { useNavigate } from 'react-router-dom';
import styles from './styles.module.css';
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
        navigate(`/search`);
        console.log('no serach');

        setData(allData(fetcherData));
        clearStateQuery();
      }
    };

    filterLocationData();
  }, [query]);
  console.log(data);
  return (
    <div className={styles.search_grid}>
      {data.map(({ id, name, media, location, rating, price, owner }) => (
        <VenuesCard
          key={id}
          id={id}
          name={name}
          media={media}
          location={location}
          rating={rating}
          price={price}
          owner={owner}
        />
      ))}
    </div>
  );
};
