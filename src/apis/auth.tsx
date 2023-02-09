import { JoinFormValues } from '../hooks/useJoinForm';
import { setAccessToken, setRefreshToken } from '../utils/cookie';
import { client, publicClient } from './client';
import { PartType } from './post';

export interface KakaoValidationResponse {
  accessToken: string;
  isMember: boolean;
  userId: number;
}

export interface KakaoJoinResponse {
  userId: number;
}

export interface GetUserInfoResponse {
  userId: number;
  type: PartType | string;
  nickname: string;
  profileImage: string;
  grade: number;
  refreshToken: string | null;
  countScrap: number;
  countLike: number;
}

export interface JoinRequest extends JoinFormValues {
  token: string;
}

export const authAPI = {
  KAKAO_VALIDATION: async (code: string): Promise<KakaoValidationResponse> => {
    const response = await publicClient.get(`/kakao/login?code=${code}`);
    const accessToken = response.data.data.accessToken;
    const refreshToken = response.data.data.refreshToken;
    setAccessToken(accessToken);
    setRefreshToken(refreshToken);
    return response.data.data;
  },

  CHECK_NICKNAME: async (
    token: string,
    nickname: string,
    userId: number
  ): Promise<boolean> => {
    const response = await publicClient.post(
      '/user/nickname',
      {
        nickname: `${nickname}`,
        userId: userId,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data.data.is_used;
  },

  MODIFY_PROFILE: async (data: any): Promise<KakaoJoinResponse> => {
    console.log(data);
    const response = await client.put('/user/join', {
      nickname: data.nickname,
      profileImage: data.profileImage,
      grade: data.grade,
      type: data.type,
    });

    return response.data.data;
  },

  JOIN: async (data: any): Promise<KakaoJoinResponse> => {
    const response = await publicClient.post(
      '/user/join',
      {
        nickname: data.nickname,
        profileImage: data.profileImage,
        grade: data.grade,
        type: data.type,
      },
      {
        headers: {
          Authorization: `Bearer ${data.token}`,
        },
      }
    );

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
