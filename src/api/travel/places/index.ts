import {api} from '../../';

export interface ICreatePlace {
  name: string;
  date: Date;
  type: string;
  spent: number;
  rating: number;
  tripId: number;
  imageId: number;
}

export interface IPlace {
  id: number;
  name: string;
  date: Date;
  type: string;
  spent: number;
  rating: number;
  tripId: number;
  imageId: number;
}

export const createPlace = async (body: ICreatePlace): Promise<IPlace> => {
  console.log({body});
  const response = await api.post<IPlace>('/places', {
    name: body.name,
    date: body.date,
    type: body.type,
    spent: body.spent,
    rating: body.rating,
    tripId: body.tripId,
    imageId: body.imageId,
  });

  return response.data;
};

export const getPlaces = async (userId: number): Promise<IPlace[]> => {
  const response = await api.get(`/places/user/${userId}`);

  return response.data;
};

export const getPlacesByTripId = async (tripId: number): Promise<IPlace[]> => {
  const response = await api.get(`/places/trip/${tripId}`);

  return response.data;
};

export const deletePlace = async (id: number): Promise<void> => {
  await api.delete(`/places/${id}`);
};
