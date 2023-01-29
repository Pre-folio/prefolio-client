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

export const useFeed = () => {
  const [posts, setPosts] = useState<SinglePostResponse[]>([]);
  const [searched, setSearched] = useState<boolean>(false);

  const getFeed = async () => {
    const feed: PostResponse = await postAPI.ALL(getCookie());
    if (feed && getCookie()) {
      console.log(feed);
    }
    setPosts(feed.posts);
  };

  const getSearch = async (searchWord: string) => {
    const feed: PostResponse = await postAPI.SEARCH({
      sortBy: 'CREATED_AT',
      pageNum: 0,
      limit: 24,
      searchWord: searchWord,
    });
    if (feed && getCookie()) {
      console.log(feed);
    }
    setPosts(feed.posts);
  };

  useEffect(() => {
    getFeed();
  }, []);

  const nowRead = posts.slice(0, 4);

  return {
    posts,
    setPosts,
    getFeed,
    getSearch,
    nowRead,
    searched,
    setSearched,
  };
};
