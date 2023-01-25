import axios, { AxiosInstance } from 'axios';

const PREFOLIO_API_URL = 'https://api.prefolio.net/';

export const client: AxiosInstance = axios.create({
  baseURL: PREFOLIO_API_URL,
  withCredentials: true, // refresh_token cookie를 주고받기 위함
  headers: {
    Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxNSIsImlzcyI6InByZWZvbGlvIiwiaWF0IjoxNjc0NTg4MTE1LCJleHAiOjE2NzQ2NzQ1MTUsImlkIjoxNSwicm9sZXMiOiJVU0VSIn0.BhevoL94IT_fXsimKce1vKsxiCO39ILuchb1pyRvWIk`,
  },
});

export const publicClient: AxiosInstance = axios.create({
  baseURL: PREFOLIO_API_URL,
  withCredentials: true, // refresh_token cookie를 주고받기 위함
});
