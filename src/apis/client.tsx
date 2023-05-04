import axios, { AxiosInstance, AxiosError, AxiosHeaders, AxiosRequestConfig,
  isAxiosError,} from 'axios';
import { getCookie } from '../utils/cookie';

const PREFOLIO_API_URL = 'https://api.prefolio.net/';

export const client: AxiosInstance = axios.create({
  baseURL: PREFOLIO_API_URL,
  withCredentials: true, // refresh_token cookie를 주고받기 위함
  headers: {
    Authorization: `Bearer ${getCookie()}`,
  },
});

export const publicClient: AxiosInstance = axios.create({
  baseURL: PREFOLIO_API_URL,
  withCredentials: true, // refresh_token cookie를 주고받기 위함
});

// 헤더에 토큰 껴 주기
// const setAuthHeader = (token) => {
//   if (token) {
//     api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
//   } else {
//     delete api.defaults.headers.common['Authorization'];
//   }
// };

// publicClient.interceptors.response.use((response) => response, async (error: AxiosError) => {
//   const originalRequest = error.config;
//   return Promise.reject(error);
// }
// )
