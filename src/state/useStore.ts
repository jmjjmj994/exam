import { create } from 'zustand';

export const useStep = create((set) => ({
  step: 0,
  finished: false,
  nextStep: () => set((state: { step: number }) => ({ step: state.step + 1 })),
  prevStep: () =>
    set((state: { step: number }) => ({
      step: state.step === 0 ? 0 : state.step - 1,
    })),

  confirmFinish: () => set({ finished: true }),
}));
