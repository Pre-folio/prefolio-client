import axios, { AxiosInstance } from 'axios';
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

publicClient.interceptors.response.use((response) => response, )
