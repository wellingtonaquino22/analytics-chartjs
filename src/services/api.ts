import axios from 'axios';
import env from '@beam-australia/react-env';
import { getToken } from "../token/token";

const api = axios.create({
  baseURL: env('API_URL') || process.env.NEXT_PUBLIC_CMD_API_URL,
});

api.interceptors.request.use(
  function (config: any) {
    if (getToken('')) {
      config.headers.Authorization = `Bearer ${getToken('')}`;
    }
    return config;
  },
  function (error) {
    // Faz alguma coisa com o erro da requisição
    console.error(error);
    return Promise.reject(error);
  }
);

export default api;
