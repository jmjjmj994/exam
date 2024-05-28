type Location = {
  address: string;
  city: string;
  country: string;
  name: string;
};

export type FilterLocationProps = {
  location: Location;
  query: string;
  name: string;
};

export const filterLocation = (
  data: FilterLocationProps[],
  query: string
): FilterLocationProps[] => {
  const queryToLower = query.toLowerCase();
  const filterByLocation = data.filter(
    (result) =>
      result.location?.city?.toLowerCase().includes(queryToLower) ||
      result.location?.address?.toLowerCase().includes(queryToLower) ||
      result.location?.country?.toLowerCase().includes(queryToLower) ||
      result.name.toLowerCase().includes(queryToLower)
  );
  return filterByLocation;
};

export const allData = (data, amount) => {
  const venues = data.map(venue => venue)
  return venues;
};
