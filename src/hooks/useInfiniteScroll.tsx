import { useInfiniteQuery } from '@tanstack/react-query';
import { useState } from 'react';
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
  sortBy: string;
  partTagList?: string;
  actTagList?: string;
  pageNum: number;
  limit: number;
  searchWord: string;
}
export type SearchStateType = 'wait' | 'result' | 'none';

export const useInfiniteScroll = () => {
  const [pageNum, setPageNum] = useState<number>(0);
  const [feed, setFeed] = useState<SinglePostResponse[]>([]);
  const [search, setSearch] = useState<SinglePostResponse[]>([]);
  const [hasMore, setHasMore] = useState<boolean>(true);

  const [searchType, setSearchType] = useState<SearchStateType>('wait');
  const [searchWord, setSearchWord] = useState<string>('');
  const { type, act, sort, handleTagClick, handleTabClick } = useTagArea();

  const getInitialData = async ({ pageParam = 0 }) => {
    const param = {
      sortBy: sort ? 'CREATED_AT' : 'LIKES',
      pageNum: pageParam,
      limit: 20,
      partTagList: type.join(','),
      actTagList: act.join(','),
    };

    const res = await postAPI.ALL(getCookie(), param);

    return {
      board_page: res.posts,
      current_page: pageParam,
      isLast: pageParam === res.totalPages,
    };
  };

  const {
    data: getBoard,
    fetchNextPage: getNextPage,
    isSuccess: getBoardIsSuccess,
    hasNextPage: getNextPageIsPossible,
    isLoading: isLoading,
  } = useInfiniteQuery(['feed', type, act, sort], getInitialData, {
    getNextPageParam: (lastPage: any, pages: any) => {
      if (!lastPage.isLast) return lastPage.current_page + 1;
      return undefined;
    },
  });

  return {
    getBoard,
    getNextPage,
    getBoardIsSuccess,
    getNextPageIsPossible,
    isLoading,
    type,
    act,
    sort,
    handleTagClick,
    handleTabClick,
  };
};
