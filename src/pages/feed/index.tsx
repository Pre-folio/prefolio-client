import { SettingsInputCompositeSharp } from '@mui/icons-material';
import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import postAPI, { PostResponse } from '../../apis/post';
import { Toast } from '../../components/common/Toast';
import { Space } from '../../components/common/Wrapper';
import { Banner } from '../../components/feed/Banner';
import { FeedTagArea } from '../../components/feed/FeedTagArea';
import { NoPost } from '../../components/feed/NoPost';
import { Posts, SinglePostResponse } from '../../components/feed/Posts';
import { useToast } from '../../hooks/useToats';
import { userState } from '../../store/Auth/userState';
import { getCookie } from '../../utils/cookie';

const Feed = () => {
  const user = useRecoilValue(userState);
  const [posts, setPosts] = useState<SinglePostResponse[]>([]);
  const { openToast } = useToast();

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
      <Button onClick={() => openToast('정보를 모두 입력해주세요!')} />
      <Toast varient='error' />
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

const Button = styled.button`
  height: 100px;
  background-color: pink;
`;
