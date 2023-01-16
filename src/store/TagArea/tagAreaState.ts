import { atom } from 'recoil';

export const selectedTagsListState = atom<string[]>({
  key: 'selectedTagsListState',
  default: [],
});
