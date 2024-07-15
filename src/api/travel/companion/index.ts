import { api } from '../../';

export interface ICompanion {
  name: string;
  description: string;
  tripId: number;
  imageId: number;
}

export const createCompanion = async (
  body: ICompanion
): Promise<ICompanion> => {
  const response = await api.post<ICompanion>('/companions', {
    name: body.name,
    description: body.description,
    tripId: body.tripId,
    imageId: body.imageId,
  });

  return response.data;
};

export const getCompanions = async (userId: number): Promise<ICompanion[]> => {
  const response = await api.get(`/companions/user/${userId}`);

  return response.data;
};

export const getCompanionsByTripId = async (
  tripId: number
): Promise<ICompanion[]> => {
  const response = await api.get(`/companions/trip/${tripId}`);

  return response.data;
};

export const deleteCompanion = async (id: number): Promise<void> => {
  await api.delete(`/companions/${id}`);
};
