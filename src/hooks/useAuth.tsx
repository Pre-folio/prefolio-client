import { useRouter } from 'next/router';
import { useMutation, useQueryClient } from 'react-query';
import { useRecoilState } from 'recoil';
import authAPI, {
  GetUserInfoResponse,
  KakaoJoinResponse,
  KakaoValidationResponse,
} from '../apis/auth';
import { accessToken, userState } from '../store/Auth/userState';
import { isLoggedInState } from '../store/LoggedIn/loggedInState';
import { setAccessToken } from '../utils/cookie';

export const useAuth = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const [user, setUser] = useRecoilState(userState);
  const [token, setToken] = useRecoilState(accessToken);
  const [login, setLogin] = useRecoilState(isLoggedInState);

  // 가입 여부 확인
  const kakaoValidationMutation = useMutation(authAPI.KAKAO_VALIDATION, {
    onSuccess: (data: KakaoValidationResponse) => {
      setAccessToken(data.accessToken);
      if (data.userId) {
        // 가입한 유저인 경우 로그인
        kakaoLoginMutation.mutate(data.userId);
      } else {
        // 가입하지 않은 경우 회원가입
        router.push('/settings');
      }
    },
    onError: (error: any) => {
      console.log(error);
    },
  });

  // 회원가입
  const kakaoJoinMutation = useMutation(authAPI.JOIN, {
    onSuccess: (data: KakaoJoinResponse) => {
      queryClient.setQueryData(['user_id'], data);
      console.log('회원가입 완료, user_id:', data);
      kakaoLoginMutation.mutate(data.userId);
    },
    onError: (error: any) => console.log(error),
  });

  // 로그인
  const kakaoLoginMutation = useMutation(authAPI.USER_INFO, {
    onSuccess: (data: GetUserInfoResponse) => {
      console.log('회원가입/로그인 완료, userInfo:', data);
      setUser(data);
      setLogin(true);
      router.push('/feed');
    },
    onError: (error: any) => console.log(error),
  });

  return { kakaoValidationMutation, kakaoJoinMutation, kakaoLoginMutation };
};
