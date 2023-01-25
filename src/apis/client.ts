import axios, { AxiosInstance } from 'axios';

const PREFOLIO_API_URL = 'https://api.prefolio.net/';

const client: AxiosInstance = axios.create({
  baseURL: PREFOLIO_API_URL,
  withCredentials: true, // refresh_token cookie를 주고받기 위함
  headers: {
    Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxNSIsImlzcyI6InByZWZvbGlvIiwiaWF0IjoxNjc0Njc1MzQ2LCJleHAiOjE2NzQ3NjE3NDYsImlkIjoxNSwicm9sZXMiOiJVU0VSIn0.qXorLJVWljk-j7BBfzoqWUbidgpRCOLvHp4v4IdmHpI`,
  },
});

export default client;
