import { atom } from 'recoil';

export const toastState = atom<boolean>({
  key: 'toastState',
  default: false,
});

export const toastContentState = atom<string>({
  key: 'toastContentState',
  default: '',
});
