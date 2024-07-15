import { api } from '../../';

export interface ICreateDestination {
  name: string;
  date: Date;
  location: string;
  estimatedCost: number;
  tripId: number;
  imageId: number;
}

export interface IDestination {
  id: number;
  name: string;
  date: Date;
  location: string;
  estimatedCost: number;
  tripId: number;
  imageId: number;
}

export const createDestination = async (
  body: ICreateDestination
): Promise<IDestination> => {
  console.log({ body });
  const response = await api.post<IDestination>('/destinations', {
    name: body.name,
    date: body.date.toISOString(),
    location: body.location,
    estimatedCost: body.estimatedCost,
    tripId: body.tripId,
    imageId: body.imageId,
  });

  return response.data;
};

export const getDestinations = async (
  userId: number
): Promise<IDestination[]> => {
  const response = await api.get(`/destinations/user/${userId}`);

  return response.data;
};

export const getDestinationsByTripId = async (
  tripId: number
): Promise<IDestination[]> => {
  const response = await api.get(`/destinations/trip/${tripId}`);

  return response.data;
};

export const deleteDestination = async (id: number): Promise<void> => {
  await api.delete(`/destinations/${id}`);
};
