import { useFetchVenues } from 'src/api/fetch/use-fetch-venues.hook';
export const Venues = () => {
  const [data] = useFetchVenues(1);
  console.log(data, ' in here');
  return <p>hoi</p>;
};
