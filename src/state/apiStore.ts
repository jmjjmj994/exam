import { create } from 'zustand';
import { options } from 'src/api/config/api-options';

type FetcherState = {
  fetcherData: any[];
  fetcherLoading: boolean;
  error: string | null;
  query: string;
  fetchData: (currentPage: number) => Promise<void>;
  getData: () => Promise<void>;
  setStateQuery: (queryString: string) => void;
  clearStateQuery: () => void;
};

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
          fetcherLoading: true,
        }));
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

type DataStoreState = {
  data: any[];
  loading: boolean;
  error: string | null;
  fetchData: () => Promise<void>;
};

// Create the new store
export const useDataStore = create<DataStoreState>((set) => ({
  data: [],
  loading: true,
  error: null,

  fetchData: async () => {
    try {
      const response = await fetch(
        'https://v2.api.noroff.dev/holidaze/venues/?_owner=true&_bookings=true'
      );
      if (!response.ok)
        throw new Error(`${response.statusText}: error in data fetcher`);

      const { data } = await response.json();

      // Set the data in the store
      set({ data, loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
      console.log(error);
    }
  },
}));
