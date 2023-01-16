import { atom } from 'recoil';

export const progressBarState = atom<number | number[]>({
  key: 'progressBarState',
  default: 0,
});
