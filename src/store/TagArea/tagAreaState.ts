import { atom } from 'recoil';

export const selectedActTagListState = atom<string[]>({
  key: 'selectedActTagListState',
  default: [],
});

export const selectedPartTagListState = atom<string[]>({
  key: 'selectedPartTagListState',
  default: [],
});

export const selectedTagsListState = atom<string[]>({
  key: 'selectedTagsListState',
  default: [],
});
