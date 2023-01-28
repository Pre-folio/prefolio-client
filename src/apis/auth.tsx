import { setAccessToken } from '../utils/cookie';
import { client, publicClient } from './client';

export interface KakaoValidationResponse {
  accessToken: string;
  isMember: boolean;
  userId?: number;
}

export interface KakaoJoinResponse {
  userId: number;
}

export interface GetUserInfoResponse {
  userId: number;
  type: string;
  nickname: string;
  profileImage: string;
  grade: number;
  refreshToken: null;
  countScrap: number;
  countLike: number;
}

export const authAPI = {
  KAKAO_VALIDATION: async (code: string): Promise<KakaoValidationResponse> => {
    const response = await publicClient.get(`/kakao/login?code=${code}`);
    const accessToken = response.data.data.accessToken;
    setAccessToken(accessToken);
    return response.data.data;
  },

  CHECK_NICKNAME: async (nickname: string): Promise<boolean> => {
    const response = await client.post('/user/nickname', {
      nickname: `${nickname}`,
    });
    return response.data.data.is_used;
  },

  JOIN: async (data: any): Promise<KakaoJoinResponse> => {
    console.log(data);
    const response = await client.post('/user/join', {
      nickname: data.nickname,
      profileImage: data.profileImage,
      grade: data.grade,
      type: data.type,
    });

    return response.data.data;
  },

  USER_INFO: async (
    data: KakaoValidationResponse
  ): Promise<GetUserInfoResponse> => {
    const response = await publicClient.get(`/user/${data.userId}`, {
      headers: {
        Authorization: `Bearer ${data.accessToken}`,
      },
    });
    return response.data.data;
  },

  USER_TOKEN: async (token: string): Promise<KakaoJoinResponse> => {
    const response = await publicClient.get('/user/token', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.data;
  },
};

export default authAPI;
