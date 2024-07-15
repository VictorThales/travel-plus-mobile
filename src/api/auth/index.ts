import { api } from '..';

interface LoginResponse {
  id: number;
  name: string;
  email: string;
  country: string;
  city: string;
  password: string;
}

export interface IUserResponse {
  id: number;
  name: string;
  email: string;
  age: number;
  country: string;
  city: string;
  password: string;
}
export interface IUser {
  name: string;
  email: string;
  age: number;
  country: string;
  city: string;
  password: string;
}

export const login = async (
  email: string,
  password: string
): Promise<LoginResponse> => {
  const response = await api.post(`/users/login`, {
    email: email.toLowerCase(),
    password,
  });

  return response.data;
};

export const createUser = async (body: IUser): Promise<IUserResponse> => {
  const response = await api.post(`/users`, {
    name: body.name,
    email: body.email.toLowerCase(),
    age: body.age,
    country: body.country,
    city: body.city,
    password: body.password,
  });

  return response.data;
};
