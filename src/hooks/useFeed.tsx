import { useEffect, useState } from 'react';
import postAPI, { PostResponse } from '../apis/post';
import { SinglePostResponse } from '../components/feed/Posts';
import { getCookie } from '../utils/cookie';

export const useFeed = () => {
  const [posts, setPosts] = useState<SinglePostResponse[]>([]);
  const getFeed = async () => {
    const feed: PostResponse = await postAPI.ALL(getCookie());
    if (feed && getCookie()) {
      console.log(feed);
    }
    setPosts(feed.posts);
  };

  useEffect(() => {
    getFeed();
  }, []);

  return { posts, setPosts, getFeed };
};
