import axios, { AxiosInstance } from 'axios';

const PREFOLIO_API_URL = 'https://api.prefolio.net/';

const client: AxiosInstance = axios.create({
  baseURL: PREFOLIO_API_URL,
  withCredentials: true,
  //   headers: {
  //     access_token: cookies.get('access_token'),
  //   },
});

export default client;
