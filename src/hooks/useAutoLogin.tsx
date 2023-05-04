/* eslint-disable react-hooks/exhaustive-deps */
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import authAPI, { KakaoJoinResponse } from '../apis/auth';
import { getCookie } from '../utils/cookie';
import { useAuth } from './useAuth';

export function useAutoLogin() {
  const router = useRouter();
  const accessToken = getCookie();
  const { kakaoAutoLoginMutation } = useAuth();
  const { pathname } = router;

  const privatePage =
    pathname.includes('feed') ||
    pathname.includes('write') ||
    pathname.includes('post') ||
    pathname.includes('search') ||
    pathname.includes('setting') ||
    pathname.includes('oauth') ||
    pathname.includes('profile');

    // const getUserId = async (accessToken: string) => {
    //   if (accessToken) {
    //     await authAPI.USER_TOKEN(accessToken);
    //     return await authAPI.USER_TOKEN(accessToken);
    //   }
    // };

  useEffect(() => {
    if (accessToken) {
      accessTokenMutation.mutate(accessToken);
    } else if (!accessToken && privatePage) {
      router.push('/');
    }
  }, [pathname, accessToken]);

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
