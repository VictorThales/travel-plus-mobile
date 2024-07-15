import axios from 'axios';
import { errorHandler } from './errorHandler';

export const api = axios.create({
  baseURL: 'http://localhost:3000',
});

api.interceptors.response.use((response) => response, errorHandler);
