/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah */

import { create } from "zustand";

export const useAuthStore = create((set) => ({
    email : null,
    setEmail : (email) => set({ email })
}));

