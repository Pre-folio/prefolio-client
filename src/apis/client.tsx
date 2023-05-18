import axios, { AxiosInstance, AxiosError, AxiosHeaders, AxiosRequestConfig, isAxiosError } from 'axios';
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
const setAuthHeader = (token: string) => {
    if (token) {
        client.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
        delete client.defaults.headers.common['Authorization'];
    }
};

// publicClient.interceptors.response.use(
//     (response) => response,
//     async (error: AxiosError) => {
//         const originalRequest = error.config;

//         // 토큰 만료 에러 확인
//         if (Number(error.response?.status) === 401) {
//             try {
//                 // 토큰 갱신 요청
//                 const accessToken = await refreshTokenRequest();

//                 // 갱신된 액세스 토큰으로 요청 재시도
//                 originalRequest.headers.Authorization = `Bearer ${accessToken}`;
//                 refreshSubscribers.forEach((subscriber) => subscriber(accessToken));
//                 refreshSubscribers = [];
//                 return api(originalRequest);
//             } catch (refreshError) {
//                 // 토큰 갱신 실패 시 로그아웃 등 예외처리
//                 // 예를 들면, 로그인 페이지로 리다이렉트
//                 console.log(refreshError);
//                 // 로그아웃 등 처리
//             } finally {
//                 isRefreshing = false;
//             }
//         }

//         return Promise.reject(error);
//     }
// );
