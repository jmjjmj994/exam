import { useFetchVenues } from 'src/api/fetch/use-fetch-venues.hook';
import { VenuesCard } from './VenuesCard';
import { VenuesSkeleton } from './VenuesSkeleton';
export const Venues = () => {
  const { data, isLoading, error } = useFetchVenues(1);
  console.log(data.data);
  const filterData = data.data.filter(
    (venue) =>
      venue.location.address &&
      venue.location.city &&
      venue.location.country &&
      venue.name.length < 30
  );
  console.log(data, ' in here');
  return (
    <>
      {isLoading &&
        Array.from({ length: 30 }).map((_, index) => (
          <VenuesSkeleton key={index} />
        ))}
      {filterData.map(
        ({ id, name, media, location, rating, meta, price, owner }) => (
          <VenuesCard
            key={id}
            id={id}
            name={name}
            media={media}
            location={location}
            rating={rating}
            meta={meta}
            price={price}
            maxGuests={0}
            owner={owner}
          />
        )
      )}
    </>
  );
};
