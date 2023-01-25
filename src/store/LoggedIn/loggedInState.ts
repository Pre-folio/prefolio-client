import { atom } from 'recoil';

export const isLoggedInState = atom<boolean>({
  key: 'isLoggedInState',
  default: false,
});
