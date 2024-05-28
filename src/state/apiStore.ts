import { create } from 'zustand';

import { options } from 'src/api/config/api-options';
/*store
fetcher
ligger i store
når søk
hent fra store
 */

export const useRecursiveDataFetcher = create((set) => ({
  data: [],
  isLoading: true,
  error: null,

  fetchData: async (currentPage:number) => {
    try {
      const response = await fetch(
        `https://v2.api.noroff.dev/holidaze/venues/?_owner=true&_bookings=true&page=${currentPage}`,
        {
          headers: options.headers,
        }
      );
      if (!response.ok)
        throw new Error(`${response.statusText}: error in recursive fetcher`);
       

const {data, meta} = await response.json()

      set((state) => ({
        data: [...state.data, ...data],
      }));

      if(!meta.isLastPage) {
        useRecursiveDataFetcher.getState().fetchData(currentPage + 1)
      } else {
        set((state) => ({
          isLoading: false,
        }));
      }
    } catch (error) {
      console.log(error);
    } finally {
      console.log('finish');
    }
  },

  getData: async () => {
    const { fetchData } = useRecursiveDataFetcher.getState();
    fetchData(1);
  },
}));
