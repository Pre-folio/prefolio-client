import { useEffect, useState } from 'react';
import postAPI, {
  ActType,
  PartType,
  PostResponse,
  SortType,
} from '../apis/post';
import { SinglePostResponse } from '../components/feed/Posts';
import { getCookie } from '../utils/cookie';

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

  const getFeed = async () => {
    const res: PostResponse = await postAPI.ALL(getCookie());

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
  }, []);

  return {
    search,
    setSearch,
    getFeed,
    getSearch,
    feed,
    searchType,
    setSearchType,
  };
};
