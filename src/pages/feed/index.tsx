import { SettingsInputCompositeSharp } from '@mui/icons-material';
import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import postAPI, { PostResponse } from '../../apis/post';
import { ProfilePopUp } from '../../components/common/PropfilePopUp';
import { Toast } from '../../components/common/Toast';
import { Space, Text } from '../../components/common/Wrapper';
import { Banner } from '../../components/feed/Banner';
import { FeedTagArea } from '../../components/feed/FeedTagArea';
import { FloatSearch } from '../../components/feed/FloatSearh';
import { NoPost } from '../../components/feed/NoPost';
import { Posts, SinglePostResponse } from '../../components/feed/Posts';
import { useFeed } from '../../hooks/useFeed';
import { useTagArea } from '../../hooks/useTagArea';
import { useToast } from '../../hooks/useToats';
import { userState } from '../../store/Auth/userState';
import { getCookie } from '../../utils/cookie';

const Feed = () => {
  const { openToast } = useToast();
  const { feed, getFeed } = useFeed();
  const { type, act, handleTagClick } = useTagArea();

  useEffect(() => {
    console.log(act);
  }, [act]);

  return (
    <div>
      <FloatSearch top={413} />
      <Banner />
      <Space height={100} />
      <FeedTagArea type={type} act={act} onClick={handleTagClick} />
      <Space height={60} />
      <Posts posts={feed} />
      <Space height={96} />
      <NoPost
        text={
          <>
            <Text typo={'Heading3'} color={'Gray30'} height={34}>
              더 이상 볼 수 있는 게시글이 없어요!
            </Text>
            <Text typo={'Heading3'} color={'Gray30'} height={34}>
              더 많은 글을 작성해보세요 :)
            </Text>
          </>
        }
      />
      <Space height={478} />
    </div>
  );
};

export default Feed;
