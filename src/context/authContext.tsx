import React, { createContext, useEffect, ReactNode } from 'react';
import { IUser, login as apiLogin, createUser } from '../api/auth';
import { logoutUser, setUser } from '../stores/useAuthStore';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface AuthContextProps {
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  register: (body: IUser) => Promise<void>;
}

export const AuthContext = createContext<AuthContextProps>({
  login: async () => {},
  logout: async () => {},
  register: async () => {},
});

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  useEffect(() => {
    const loadUser = async () => {
      const storedUser = await AsyncStorage.getItem('user');
      console.log({ storedUser: storedUser });
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    };
    loadUser();
  }, []);

  const login = async (email: string, password: string) => {
    const userData = await apiLogin(email, password);
    setUser(userData);
    await AsyncStorage.setItem('user', JSON.stringify(userData));
  };

  const register = async (body: IUser) => {
    await createUser(body).then(async (data) => {
      await login(data.email, body.password);
    });
  };

  const logout = async () => {
    logoutUser();
    await AsyncStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};
