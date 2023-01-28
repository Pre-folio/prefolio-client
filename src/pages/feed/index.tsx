import { SettingsInputCompositeSharp } from '@mui/icons-material';
import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import postAPI, { PostResponse } from '../../apis/post';
import { Toast } from '../../components/common/Toast';
import { Space } from '../../components/common/Wrapper';
import { Banner } from '../../components/feed/Banner';
import { FeedTagArea } from '../../components/feed/FeedTagArea';
import { FloatSearch } from '../../components/feed/FloatSearh';
import { NoPost } from '../../components/feed/NoPost';
import { Posts, SinglePostResponse } from '../../components/feed/Posts';
import { useFeed } from '../../hooks/useFeed';
import { useToast } from '../../hooks/useToats';
import { userState } from '../../store/Auth/userState';
import { getCookie } from '../../utils/cookie';

const Feed = () => {
  const { openToast } = useToast();
  const { posts } = useFeed();

  return (
    <div>
      <FloatSearch top={413} />
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
