type Location = {
  address: string;
  city: string;
  country: string;
  zip: string;
  continent: string;
  lat: number;
  lng: number;
};

export type FilterLocationProps = {
  id: string;
  location: Location;
  query: string;
  name: string;
  media: {
    url: string;
    alt: string;
  }[];
  rating: number;
  price: number;
  owner: {
    email: string;
    bio: string;
    banner: {
      url: string;
      alt: string;
    };
  };
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

export const allData = (data:FilterLocationProps) => {
  if (!Array.isArray(data) || data.length === 0) {
    return [];
  }
  return data;
};
