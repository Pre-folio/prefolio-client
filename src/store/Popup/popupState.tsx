import { atom } from 'recoil';

export const isPostDeleteButtonClickedState = atom<boolean>({
  key: 'isPostDeleteButtonClickedState',
  default: false,
});
