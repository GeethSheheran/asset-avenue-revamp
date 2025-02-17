import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { persist } from "zustand/middleware";

export const useAuthStore = create()(
  immer(
    persist(
      (set) => ({
        user: null,
        setUser: (user) =>
          set((state) => {
            state.user = user;
          }),
        shownWertSuccessModal: false,
        setShownWertSuccessModal: (shownWertSuccessModal) =>
          set((state) => {
            state.shownWertSuccessModal = shownWertSuccessModal;
          }),
      }),
      {
        name: "asset-avenue-revamp-auth",
      }
    )
  )
);
