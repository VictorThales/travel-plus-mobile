import {api} from '..';

interface LoginResponse {
  id: number;
  name: string;
  email: string;
  country: string;
  city: String;
  password: String;
}

export const login = async (
  email: string,
  password: string,
): Promise<LoginResponse> => {
  const response = await api.post(`/users/login`, {
    email: email.toLowerCase(),
    password,
  });

  return response.data;
};
