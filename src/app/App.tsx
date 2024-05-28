import { Helmet } from 'react-helmet-async';
import { useFetchVenues } from 'src/api/fetch/use-fetch-venues.hook';
import { VenuesCard } from './VenuesCard';
import { VenuesSkeleton } from './VenuesSkeleton';
import styles from './styles.module.css';
import { usePaginationFetcher } from 'src/state/apiStore';
import { useEffect } from 'react';
import { useRecursiveDataFetcher } from 'src/state/apiStore';
export const App = () => {
  const { fetcherData, fetcherLoading, getData } = useRecursiveDataFetcher();
  const { data, isLoading, error } = useFetchVenues(1);

  useEffect(() => {
    getData()

    console.log('fetching fetcher');
  }, []);
  console.log(fetcherData);
  const filterData = data.data.filter(
    (venue) =>
      venue.location.address &&
      venue.location.city &&
      venue.location.country &&
      venue.name.length < 30
  );
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>

      <div className={styles.app_grid}>
        {isLoading &&
          Array.from({ length: 30 }).map((_, index) => (
            <VenuesSkeleton key={index} />
          ))}

        {filterData.map(
          ({ id, name, media, location, rating, price, owner }) => (
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
          )
        )}
      </div>
    </div>
  );
};
