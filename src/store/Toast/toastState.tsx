import { atom } from 'recoil';

export const toastState = atom<boolean>({
  key: 'toastState',
  default: false,
});

export const toastContentState = atom<string>({
  key: 'toastContentState',
  default: '',
});

export const toastTypeState = atom<'success' | 'error'>({
  key: 'toastTypeState',
  default: 'error',
});
