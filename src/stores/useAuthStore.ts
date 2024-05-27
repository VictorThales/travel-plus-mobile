import {create} from 'zustand';

interface User {
  id: number;
  name: string;
  email: string;
  country: string;
  city: String;
  password: String;
}

type IAuthState = {
  user: User | null;
};

interface AuthStore {
  user: User | null;
  logout: () => void;
  setUser: (user: User | null) => void;
}

export const initialState: IAuthState = {
  user: null,
};

export const useAuthStore = create<AuthStore>()(set => ({
  ...initialState,
  logout: () => set({user: null}),
  setUser: (user: User | null) => set({user}),
}));

export const logoutUser = useAuthStore.getState().logout;
export const userData = useAuthStore.getState().user;
export const setUser = useAuthStore.getState().setUser;
