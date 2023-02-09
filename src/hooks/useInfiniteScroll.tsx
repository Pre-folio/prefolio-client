import { LastPage } from '@mui/icons-material';
import { useInfiniteQuery } from '@tanstack/react-query';
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

export interface ScrollRequestProps {
  sortBy: string;
  partTagList?: string;
  actTagList?: string;
  pageNum: number;
  limit: number;
  searchWord?: string;
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
export type ScrollType = 'feed' | 'search' | 'profile' | 'scrap';

export const useInfiniteScroll = (scrollType: ScrollType) => {
  const [pageNum, setPageNum] = useState<number>(0);
  const [feed, setFeed] = useState<SinglePostResponse[]>([]);
  const [search, setSearch] = useState<SinglePostResponse[]>([]);
  const [searchType, setSearchType] = useState<SearchStateType>('wait');
  const [searchWord, setSearchWord] = useState<string>('');
  const { type, act, sort, handleTagClick, handleTabClick } = useTagArea();
  const [results, setResults] = useState<number>(0);

  const getFeedData = async ({ pageParam = 0 }) => {
    const param = {
      sortBy: sort ? 'CREATED_AT' : 'LIKES',
      pageNum: pageParam,
      limit: 20,
      partTagList: type.join(','),
      actTagList: act.join(','),
    };

    const res =
      scrollType === 'feed'
        ? await postAPI.ALL(getCookie(), param)
        : 'search'
        ? await postAPI.SEARCH({
            ...param,
            searchWord: searchWord,
          })
        : 'profile'
        ? await postAPI.ALL(getCookie(), param)
        : await postAPI.ALL(getCookie(), param);

    setResults(res.totalResults);

    console.log('total', res.totalPages);
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
  } = useInfiniteQuery(['post', type, act, sort, searchWord], getFeedData, {
    getNextPageParam: (lastPage: any, pages: any) => {
      if (!lastPage.isLast) return lastPage.current_page + 1;
      return undefined;
    },
  });

  console.log(getBoard);

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
    searchWord,
    setSearchWord,
    results,
  };
};
