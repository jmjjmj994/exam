import { create } from 'zustand';
import { options } from 'src/api/config/api-options';
/*store
fetcher
ligger i store
når søk
hent fra store
 */
export const useFetchLocationStore = create((set) => ({
  locationData: {data:[], meta:{}},
  fetchDataLocation: async (query) => {
    console.log(query, 'in store');
    try {
      const response = await fetch(
        `https://v2.api.noroff.dev/holidaze/venues/search?q=${query}&_owner=true&_bookings=true`,
        {
          headers: options.headers,
        }
      );
      if (!response.ok) {
        throw new Error(`${response.statusText}: Error in useApiStore `);
      }
      const { data, meta } = await response.json();
      set((state) => ({
        locationData: { ...state.locationData, ...{ data: data, meta: meta } },
      }));
    } catch (error) {
      console.log(error);
    }
  },
}));
