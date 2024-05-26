import { create } from 'zustand';

type UseFormStepState = {
  formStep: number;
  formReady: boolean;
  nextFormStep: () => void;
  prevFormStep: () => void;
  resetFormReady: () => void;
  resetFormStep: () => void
};

export const useFormStep = create<UseFormStepState>((set) => ({
  formStep: 0,
  formReady: false,
  nextFormStep: () => set((state) => ({ formStep: state.formStep + 1 })),
  prevFormStep: () =>
    set((state: { formStep: number }) => ({
      formStep: state.formStep === 0 ? 0 : state.formStep - 1,
    })),
  resetFormStep: () => set({ formStep: 0 }),
  resetFormReady: () => set({ formReady: false }),
}));

type UseFormDataState = {
  bookingData: {
    dateFrom: Date | string;
    dateTo: Date | string;
    guests: number;
    venueId: string;
  };

  storeBookingData: (data: {
    dateFrom: Date;
    dateTo: Date;
    guests: number;
    venueId: string;
  }) => void;
};

export const useFormData = create<UseFormDataState>((set) => ({
  bookingData: {
    dateFrom: new Date(),
    dateTo: new Date(),
    guests: 0,
    venueId: '',
  },

  storeBookingData: ({ dateFrom, dateTo, guests, venueId }) =>
    set((state: UseFormDataState) => ({
      ...state,
      bookingData: {
        ...state.bookingData,
        dateFrom: dateFrom,
        dateTo: dateTo,
        guests: guests,
        venueId: venueId,
      },
    })),

  resetBookingData: () =>
    set({
      bookingData: {
        dateFrom: '',
        dateTo: '',
        guests: 0,
        venueId: '',
      },
    }),
}));
