import axios from 'axios';
import { atom, selector, useRecoilState } from 'recoil';
import { GetUserInfoResponse, KakaoValidationResponse } from '../../apis/auth';
import { getCookie } from '../../utils/cookie';

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

export const checkCookie = () => {
  if (typeof window !== 'undefined') {
    if (getCookie()) {
      return getCookie();
    }
    return '';
  }
};

export const accessToken = atom<string>({
  key: 'accessToken',
  default: checkCookie(),
});
