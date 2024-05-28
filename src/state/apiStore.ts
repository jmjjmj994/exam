import { create } from 'zustand';

import { options } from 'src/api/config/api-options';
/*store
fetcher
ligger i store
når søk
hent fra store
 */
type FetcherState = {
  fetcherData: any[];
  fetcherLoading: boolean;
  error: string | null;
  query: string;
  fetchData: (currentPage: number) => Promise<void>;
  getData: () => Promise<void>;
  setStateQuery: (queryString: string) => void;
  clearStateQuery: () => void;
}


export const useRecursiveDataFetcher = create<FetcherState>((set) => ({
  fetcherData: [],
  fetcherLoading: true,
  error: null,
  query: '',

  fetchData: async (currentPage: number) => {
    try {
      const response = await fetch(
        `https://v2.api.noroff.dev/holidaze/venues/?_owner=true&_bookings=true&page=${currentPage}`,
        {
          headers: options.headers,
        }
      );
      if (!response.ok)
        throw new Error(`${response.statusText}: error in recursive fetcher`);

      const { data, meta } = await response.json();

      set((state) => ({
        fetcherData: [...state.fetcherData, ...data],
      }));

      if (!meta.isLastPage) {
        useRecursiveDataFetcher.getState().fetchData(currentPage + 1);
        set(() => ({
          fetcherLoading:true
        }))
      } else {
        set(() => ({
          fetcherLoading: false,
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

  setStateQuery: (queryString) => {
    set((state) => ({ ...state, query: queryString }));
  },
  clearStateQuery: () => {
    set((state) => ({ ...state, query: '' }));
  },
}));
