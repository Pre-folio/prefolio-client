import { atom } from 'recoil';
import { GetUserInfoResponse } from '../../apis/auth';

export const userState = atom<GetUserInfoResponse>({
  key: 'userState',
  default: {
    userId: 0,
    type: '',
    nickname: '',
    profileImage: '',
    grade: 0,
    refreshToken: null,
    countScrap: 0,
    countLike: 0,
  },
});
