import {api} from '..';

export interface ICreateTravel {
  name: string;
  description: string;
  budget: number;
  user: number;
  date?: string;
}

export interface ITravel {
  id: number;
  name: string;
  description: string;
  budget: number;
  user: number;
  date?: string;
}

export const createTravel = async (
  body: ICreateTravel,
): Promise<ICreateTravel> => {
  const response = await api.post(`/trips`, {
    name: body.name,
    description: body.description,
    budget: body.budget,
    userId: body.user,
  });

  return response.data;
};

export const getTravels = async (userId: number): Promise<ITravel[]> => {
  const response = await api.get(`/trips/user/${userId}`);

  return response.data;
};

export const deleteTravel = async (id: number): Promise<ITravel[]> => {
  const response = await api.delete(`/trips/${id}`);

  return response.data;
};
