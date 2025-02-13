import { create } from 'zustand';
import { User } from '@/data/interfaces/user.interface';

export interface UserState {
  isAuthenticated: boolean;
  user: User | null;
  // Actions
  setUser: (user: User) => void;
  logout: () => void;
}

export const useUserStore = create<UserState>((set) => ({
  // État initial
  isAuthenticated: false,
  user: null,

  // Actions
  setUser: (user: User) =>
    set(() => ({
      isAuthenticated: true,
      user,
    })),

  logout: () =>
    set(() => ({
      isAuthenticated: false,
      user: null,
    })),
}));

export default useUserStore;
