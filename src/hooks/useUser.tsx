import { useQuery, useQueryClient } from 'react-query';

export interface User {
  userId: number;
  type: 'string';
  nickname: 'string';
  profileImage: 'string';
  grade: number;
  refreshToken: 'string';
  countScrap: number;
  countLike: number;
}

export const useUser = (code: string) => {
  const queryClient = useQueryClient();

  //   const { data: string } = useQuery('kakao_login', () => loginUser());

  //   const loginUser = (newUser: User) => {
  //     queryClient.setQueryData('kakao_login', newUser);
  //   };

  //   const logoutUser = (newUser: User) => {
  //     queryClient.setQueryData('kakao_login', null);
  //   };

  //   return { loginUser, logoutUser };
};
