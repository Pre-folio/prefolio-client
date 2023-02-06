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
import { FeedRequestProps, usePosts } from '../../hooks/usePosts';
import { useTagArea } from '../../hooks/useTagArea';
import { useToast } from '../../hooks/useToats';
import { userState } from '../../store/Auth/userState';
import { getCookie } from '../../utils/cookie';

const Feed = () => {
  const { openToast } = useToast();
  const { feed, getFeed } = usePosts();
  const {
    type,
    setType,
    act,
    setAct,
    sort,
    setSort,
    handleTagClick,
    handleTabClick,
  } = useTagArea();
  const user = useRecoilValue(userState);
  const [feedParam, setFeedParam] = useState<FeedRequestProps>({
    sortBy: sort ? 'CREATED_AT' : 'LIKES',
    pageNum: 0,
    limit: 24,
    partTagList: type.join(','),
    actTagList: act.join(','),
  });

  useEffect(() => {
    console.log('dddf');
    setFeedParam({
      sortBy: sort ? 'CREATED_AT' : 'LIKES',
      pageNum: 0,
      limit: 24,
      partTagList: type.join(','),
      actTagList: act.join(','),
    });
  }, [act, type, sort]);

  useEffect(() => {
    getFeed(feedParam);
  }, [feedParam]);

  return (
    <div>
      <FloatSearch top={413} />
      <Banner />
      <Space height={100} />
      <FeedTagArea
        type={type}
        act={act}
        sort={sort}
        handleTagAreaClick={handleTagClick}
        handleTabBarClick={handleTabClick}
      />
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
