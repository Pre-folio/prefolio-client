import { useEffect } from 'react';
import { atom } from 'recoil';
import { getCookie } from '../../utils/cookie';

export const checkStorage = (): boolean => {
  if (typeof window !== 'undefined') {
    const login = getCookie() || false;
    if (login) return true;
  }
  return false;
};

export const isLoggedInState = atom<boolean>({
  key: 'isLoggedInState',
  default: checkStorage(),
});
