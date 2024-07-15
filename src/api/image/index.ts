import { api } from '..';

export interface IImage {
  id: number;
  originalname: string;
  filename: string;
  filepath: string;
}

export const uploadImage = async (file: any): Promise<IImage> => {
  if (!file || !file.uri) {
    throw new Error('File object is missing or invalid.');
  }

  const formData = new FormData();
  formData.append('image', {
    name: file.fileName || file.uri.split('/').pop(),
    type: file.type || 'image/jpeg',
    uri: file.uri,
  });

  const response = await api.post<IImage>('/images/upload', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  return response.data;
};

export const getImage = async (imageId: number): Promise<Blob> => {
  const response = await api.get(`/images/${imageId}`, {
    responseType: 'blob',
  });

  return response.data;
};
