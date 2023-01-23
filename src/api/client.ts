import axios, { AxiosInstance } from 'axios';

const PREFOLIO_API_URL = 'https://api.prefolio.net/';

const client: AxiosInstance = axios.create({
  baseURL: PREFOLIO_API_URL,
  withCredentials: true, // refresh_token cookie를 주고받기 위함
  headers: {
    Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxNSIsImlzcyI6InByZWZvbGlvIiwiaWF0IjoxNjc0NDg1NTkxLCJleHAiOjE2NzQ1NzE5OTEsImlkIjoxNSwicm9sZXMiOiJVU0VSIn0.XGkCApVUHWQamjJ7wjutgzTDvYe9KgbHYe5GKSWfkbk`,
  },
});

export default client;
