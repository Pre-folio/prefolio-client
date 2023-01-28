import { useEffect } from 'react';
import { useMutation } from 'react-query';
import authAPI, { KakaoJoinResponse } from '../apis/auth';
import { getCookie } from '../utils/cookie';
import { useAuth } from './useAuth';

export function useAutoLogin() {
  const accessToken = getCookie();
  const { kakaoAutoLoginMutation } = useAuth();

  // const getUserId = async (accessToken: string) => {
  //   if (accessToken) {
  //     await authAPI.USER_TOKEN(accessToken);
  //     return await authAPI.USER_TOKEN(accessToken);
  //   }
  // };
  useEffect(() => {
    if (accessToken) {
      accessTokenMutation.mutate(accessToken);
    }
  }, [accessToken]);

  const accessTokenMutation = useMutation(authAPI.USER_TOKEN, {
    onSuccess: (data: KakaoJoinResponse) => {
      kakaoAutoLoginMutation.mutate({
        userId: data.userId,
        accessToken: accessToken,
        isMember: true,
      });
    },
    onError: (error: any) => console.log(error),
  });

  return { accessTokenMutation };
}
