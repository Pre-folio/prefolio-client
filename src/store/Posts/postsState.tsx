import { atom } from 'recoil';

// 나중에 postState 받아오면 selector로...
export const scrappedState = atom<boolean>({
  key: 'scrappedState',
  default: false,
});
