import { useEffect, useState } from 'react';
import postAPI, {
  ActType,
  PartType,
  PostResponse,
  SortType,
} from '../apis/post';
import { SinglePostResponse } from '../components/feed/Posts';
import { getCookie } from '../utils/cookie';
import { useTagArea } from './useTagArea';

export interface FeedRequestProps {
  sortBy: string;
  partTag?: PartType[];
  actTag?: ActType;
  pageNum: number;
  limit: number;
}

export interface SearchRequestProps {
  sortBy: SortType;
  partTag?: PartType;
  actTag?: ActType;
  pageNum: number;
  limit: number;
  searchWord: string;
}

export type SearchStateType = 'wait' | 'result' | 'none';

export const useFeed = () => {
  const [feed, setFeed] = useState<SinglePostResponse[]>([]);
  const [search, setSearch] = useState<SinglePostResponse[]>([]);
  const [searchType, setSearchType] = useState<SearchStateType>('wait');
  const [searchWord, setSearchWord] = useState<string>('');
  const { type, setType, act, setAct, sort, setSort } = useTagArea();

  const getFeed = async () => {
    const param = {
      sortBy: sort ? 'CREATED_AT' : 'LIKES',
      pageNum: 0,
      limit: 16,
    };
    const res: PostResponse = await postAPI.ALL(getCookie(), param);
    const keys = Object.keys(type);

    if (res && getCookie()) {
      console.log(res);
    }

    setFeed(res.posts);
  };

  const getSearch = async (searchWord: string) => {
    if (searchWord === '') {
      getFeed();
      return;
    }

    const feed: PostResponse = await postAPI.SEARCH({
      sortBy: 'CREATED_AT',
      pageNum: 0,
      limit: 24,
      searchWord: searchWord,
    });

    feed.posts.length > 0 ? setSearchType('result') : setSearchType('none');
    setSearch(feed.posts);
  };

  useEffect(() => {
    getFeed();
  }, [type, act]);

  useEffect(() => {
    getSearch(searchWord);
  }, [type, act, searchWord]);

  return {
    search,
    setSearch,
    getFeed,
    getSearch,
    feed,
    searchType,
    setSearchType,
    searchWord,
    setSearchWord,
  };
};
