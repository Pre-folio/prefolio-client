import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/router';

import { useRecoilState } from 'recoil';
import authAPI, {
  GetUserInfoResponse,
  KakaoJoinResponse,
  KakaoValidationResponse,
} from '../apis/auth';
import { accessToken, userState } from '../store/Auth/userState';
import { isLoggedInState } from '../store/LoggedIn/loggedInState';
import { getCookie, setAccessToken } from '../utils/cookie';
import { useToast } from './useToasts';

export const useAuth = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const [user, setUser] = useRecoilState(userState);
  const [token, setToken] = useRecoilState(accessToken);
  const [login, setLogin] = useRecoilState(isLoggedInState);
  const { openToast } = useToast();

  // 가입 여부 확인
  const kakaoValidationMutation = useMutation(authAPI.KAKAO_VALIDATION, {
    onSuccess: async (data: KakaoValidationResponse) => {
      setAccessToken(data.accessToken);
      if (data.isMember) {
        // 가입한 유저인 경우 로그인
        kakaoLoginMutation.mutate(data);
        openToast('로그인이 완료됐어요!', 'success');
      } else {
        // 가입하지 않은 경우 회원가입
        setUser({ ...user, userId: data.userId });
        router.push('/setting');
      }
    },
    onError: (error: any) => {
      openToast('현재 가입 여부 확인이 어려워요.', 'error');
    },
  });

  // 회원가입
  const kakaoJoinMutation = useMutation(authAPI.JOIN, {
    onSuccess: (data: KakaoJoinResponse) => {
      queryClient.setQueryData(['user_id'], data);
      openToast('회원가입이 완료됐어요!', 'success');
      kakaoLoginMutation.mutate({
        userId: data.userId,
        accessToken: getCookie(),
        isMember: true,
      });
    },
    onError: (error: any) => {
      openToast('회원가입에 실패했어요.', 'error');
    },
  });

  // 로그인
  const kakaoLoginMutation = useMutation(authAPI.USER_INFO, {
    onSuccess: (data: GetUserInfoResponse) => {
      setUser(data);
      setLogin(true);
      router.push('/feed');
    },
    onError: (error: any) => {
      openToast('로그인에 실패했어요.', 'error');
    },
  });

  // 자동 로그인
  const kakaoAutoLoginMutation = useMutation(authAPI.USER_INFO, {
    onSuccess: (data: GetUserInfoResponse) => {
      setUser(data);
      setLogin(true);
    },
    onError: (error: any) => {},
  });

  // 회원 정보 수정
  const modifyProfileMutation = useMutation(authAPI.MODIFY_PROFILE, {
    onSuccess: (data: KakaoJoinResponse) => {
      queryClient.setQueryData(['user_id'], data);
      openToast('프로필 수정이 완료됐어요!', 'success');
      kakaoLoginMutation.mutate({
        userId: data.userId,
        accessToken: getCookie(),
        isMember: true,
      });
    },
    onError: (error: any) => {
      openToast('프로필 수정에 실패했어요.', 'error');
    },
  });

  return {
    kakaoValidationMutation,
    kakaoJoinMutation,
    kakaoLoginMutation,
    kakaoAutoLoginMutation,
    modifyProfileMutation,
  };
};
