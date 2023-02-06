import { useEffect, useState } from 'react';
import { useMutation } from 'react-query';
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
  partTagList?: string;
  actTagList?: string;
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

export const usePosts = () => {
  const [feed, setFeed] = useState<SinglePostResponse[]>([]);
  const [search, setSearch] = useState<SinglePostResponse[]>([]);

  const [searchType, setSearchType] = useState<SearchStateType>('wait');
  const [searchWord, setSearchWord] = useState<string>('');
  const { type, setType, act, setAct, sort, setSort } = useTagArea();

  // 피드
  const getFeed = async (param: FeedRequestProps) => {
    const res: PostResponse = await postAPI.ALL(getCookie(), param);

    console.log('param', param);

    if (res && getCookie()) {
      console.log(res);
    }

    console.log(res.posts);

    setFeed(res.posts);
  };

  // 로그인
  // const feedMutation = useMutation(postAPI.ALL, {
  //   onSuccess: (data: PostResponse) => {},
  //   onError: (error: any) => console.log(error),
  // });

  const getSearch = async (searchWord: string) => {
    if (searchWord === '') {
      //getFeed();
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
    console.log('실행');
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
