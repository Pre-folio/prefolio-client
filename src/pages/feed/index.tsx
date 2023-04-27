import { SettingsInputCompositeSharp } from '@mui/icons-material';
import { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useInView } from 'react-intersection-observer';
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
import { useInfiniteScroll } from '../../hooks/useInfiniteScroll';
import { FeedRequestProps, usePosts } from '../../hooks/usePosts';
import { useToast } from '../../hooks/useToasts';
import { userState } from '../../store/Auth/userState';

const Feed = () => {
  const { openToast } = useToast();
  const { feed, getFeed, pageNum, setPageNum } = usePosts();
  const user = useRecoilValue(userState);
  const {
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
  } = useInfiniteScroll('feed');

  const [ref, isView] = useInView();

  useEffect(() => {
    if (isView && getNextPageIsPossible) {
      getNextPage();
    }
  }, [isView, getBoard]);

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
      {!isLoading && getBoardIsSuccess && getBoard!.pages
        ? getBoard?.pages?.map((page_data: any) => {
            return (
              <Posts
                posts={page_data.board_page}
                key={page_data.current_page}
                ref={ref}
              />
            );
          })
        : null}
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
