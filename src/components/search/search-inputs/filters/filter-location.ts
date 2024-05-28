export const filterLocation = (data, query) => {
  console.log(data);
  const filterByLocation = data.filter(
    (result) => result.location?.city?.toLowerCase() === query.toLowerCase()
  );
  return filterByLocation
};
