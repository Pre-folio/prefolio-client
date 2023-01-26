import { SettingsInputCompositeSharp } from '@mui/icons-material';
import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import postAPI, { PostResponse } from '../../apis/post';
import { Space } from '../../components/common/Wrapper';
import { Banner } from '../../components/feed/Banner';
import { FeedTagArea } from '../../components/feed/FeedTagArea';
import { NoPost } from '../../components/feed/NoPost';
import { Posts, SinglePostResponse } from '../../components/feed/Posts';
import { userState } from '../../store/Auth/userState';
import { getCookie } from '../../utils/cookie';

const Feed = () => {
  const user = useRecoilValue(userState);
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

  return (
    <div>
      <Banner />
      <Space height={100} />
      <FeedTagArea />
      <Space height={60} />
      <Posts posts={posts} />
      <Space height={96} />
      <NoPost />
      <Space height={478} />
    </div>
  );
};

export default Feed;
