import { useMutation, useQueryClient } from 'react-query';
import authAPI, {
  GetUserInfoResponse,
  KakaoJoinResponse,
  KakaoValidationResponse,
} from '../apis/auth';

export const useAuth = (code: any) => {
  const queryClient = useQueryClient();

  // 가입 여부 확인
  const kakaoValidationMutation = useMutation(authAPI.KAKAO_VALIDATION, {
    onSuccess: (data: KakaoValidationResponse) => {
      queryClient.setQueryData(['accessToken'], data.accessToken);
      console.log(data);
      console.log(data.accessToken);
      if (data.userId) {
        //이미 가입한 유저인 경우 로그인 진행
        kakaoLoginMutation.mutate(data.userId);
      } else {
        //kakaoJoinMutation.mutate(입력한 정보);
      }
    },
    onError: (error: any) => {
      console.log(error);
    },
  });

  // 회원가입
  const kakaoJoinMutation = useMutation(authAPI.JOIN, {
    onSuccess: (data: KakaoJoinResponse) => {
      queryClient.setQueryData(['userId'], data);
      console.log('회원가입 완료, userId:', data);
      kakaoLoginMutation.mutate(data.userId);
    },
    onError: (error: any) => console.log(error),
  });

  // 로그인
  const kakaoLoginMutation = useMutation(authAPI.USER_INFO, {
    onSuccess: (data: GetUserInfoResponse) => {
      queryClient.setQueryData(['userInfo'], data);
      console.log('회원가입/로그인 완료, userInfo:', data);
    },
    onError: (error: any) => console.log(error),
  });

  return { kakaoValidationMutation, kakaoJoinMutation, kakaoLoginMutation };
};
