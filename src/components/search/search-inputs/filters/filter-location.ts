type Location = {
  address: string;
  city: string;
  country: string;
};

type FilterLocationProps = {
  location: Location;
  query: string;
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
      result.location?.country?.toLowerCase().includes(queryToLower) 
  );
  return filterByLocation;
};
