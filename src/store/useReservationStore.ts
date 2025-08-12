import { create } from "zustand";

export const useReservationStore = create((set) => ({
  reservations: [],
  setReservations: (reservations) => set({ reservations }),
}));
