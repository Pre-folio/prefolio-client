import { atom } from 'recoil';
import { getCookie } from '../../utils/cookie';

const checkStorage = () => {
  if (typeof window !== 'undefined') {
    if (getCookie()) {
      return true;
    }
    return false;
  }
};

export const isLoggedInState = atom<boolean>({
  key: 'isLoggedInState',
  default: true,
});
