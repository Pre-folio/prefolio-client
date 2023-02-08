import styled from 'styled-components';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { ProfileCard } from '../../components/common/ProfileCard';
import { Column, Row } from '../../components/common/Wrapper';
import { TabBar } from '../../components/common/TabBar';
import { PostCard } from '../../components/common/PostCard';
import { TagArea } from '../../components/common/TagArea';
import { useRecoilState, useRecoilValue } from 'recoil';

import { authAPI } from '../../apis/auth';
import {
  getUserPosts,
  getUserScraps,
  ScrapRequestProps,
} from '../../apis/posts';
import { userState } from '../../store/Auth/userState';
import { getScraps } from '../../apis/postContent';
import { getCookie } from '../../utils/cookie';
import { useTagArea } from '../../hooks/useTagArea';
import { FeedRequestProps } from '../../hooks/usePosts';
import { NoPost } from '../../components/feed/NoPost';
import { useQuery } from '@tanstack/react-query';

const Profile = () => {
  const router = useRouter();
  const [watchingUserInfo, setWatchingUserInfo] = useState({});
  const userInfo = useRecoilValue(userState);
  const watchingUserId = router.query.id;
  const watchingUserIdToNumber = Number(watchingUserId);
  const isMyProfile = userInfo.userId === watchingUserIdToNumber;

  const token = getCookie();

  const { isLoading: isProfileLoading, data: profileData } = useQuery(
    ['profile-user-info', watchingUserId],
    async () => {
      if (typeof watchingUserIdToNumber === 'number') {
        const res = await authAPI.USER_INFO({
          accessToken: token,
          isMember: true,
          userId: watchingUserIdToNumber,
        });
        return res;
      }
    }
  );

  const { type, act, handleTagClick, handleTabClick } = useTagArea();

  const [barState, setBarState] = useState<boolean>(true);
  const [selectedBar, setSelectedBar] = useState<string>('');
  const [feedParam, setFeedParam] = useState<ScrapRequestProps>({
    pageNum: 0,
    limit: 24,
    partTagList: type.join(','),
    actTagList: act.join(','),
  });

  // bar 상태 관리
  useEffect(() => {
    if (barState) {
      setSelectedBar('posts');
    } else {
      setSelectedBar('scraps');
    }
  }, [barState]);

  // 스크랩한 게시물 param 결정
  useEffect(() => {
    setFeedParam({
      pageNum: 0,
      limit: 24,
      partTagList: type.join(','),
      actTagList: act.join(','),
    });
  }, [act, type]);

  const { isLoading: isPostsLoading, data: postData } = useQuery(
    ['user-posts', watchingUserIdToNumber],
    async () => {
      if (watchingUserIdToNumber) {
        return await getUserPosts(watchingUserIdToNumber, 0, 24, '', '');
      }
    }
  );

  const { isLoading: isScrapsLoading, data: scrapData } = useQuery(
    ['scrap-posts', feedParam],
    async () => {
      return await getUserScraps(feedParam);
    }
  );
  console.log(scrapData);

  // selectedBar이 post일 경우 내가 쓴 글 get api
  const posts = postData?.data.cardPosts;

  // selectedBar이 scrap일 경우 스크랩한 글 get api
  const scraps = scrapData?.cardPosts;

  return (
    <Wrapper>
      <Row
        width='100%'
        alignItems='flex-start'
        justifyContent='flex-start'
        gap='24px'
      >
        <ProfileCard
          imageSrc={profileData?.profileImage}
          nickname={profileData?.nickname}
          grade={profileData?.grade}
          field={profileData?.type}
          hits={profileData?.countLike}
          scraps={profileData?.countScrap}
          style={{ position: 'fixed', top: '180px' }}
        />
        <div style={{ width: '100%' }} />
        <Column
          width='calc(100% - 282px)'
          alignItems='flex-start'
          justifyContent='flex-start'
          gap='46px'
        >
          {isMyProfile && (
            <TabBar barState={barState} setBarState={setBarState} />
          )}
          {selectedBar === 'scraps' && (
            <TagArea
              type={type}
              act={act}
              handleTagAreaClick={handleTagClick}
              width='100%'
            />
          )}
          <PostCardsWrapper>
            {selectedBar === 'posts' &&
              !isPostsLoading &&
              posts?.map((postInfo: any, index: number) => {
                return (
                  <PostCard
                    key={index}
                    id={postInfo.postId}
                    thumbnail={postInfo.thumbnail}
                    isScrapped={postInfo.isScrapped}
                    title={postInfo.title}
                    field={postInfo.partTag}
                    activity={postInfo.actTag}
                    // postDate={scrapInfo.createdAt.slice(0, 10)}
                    // hits={postInfo.hits}
                    postDate={postInfo.createdAt}
                    hits={92}
                  />
                );
              })}
            {selectedBar === 'scraps' &&
              !isScrapsLoading &&
              scraps &&
              scraps.map((scrapInfo: any) => {
                return (
                  <PostCard
                    key={scrapInfo.postId}
                    id={scrapInfo.postId}
                    thumbnail={scrapInfo.thumbnail}
                    isScrapped={true}
                    title={scrapInfo.title}
                    field={scrapInfo.partTag}
                    activity={scrapInfo.actTag}
                    postDate={scrapInfo.createdAt}
                    hits={scrapInfo.hits}
                  />
                );
              })}
          </PostCardsWrapper>
        </Column>
      </Row>
    </Wrapper>
  );
};
// TODO 아무것도 없는 경우 확성기 이모지 추가

export default Profile;

const Wrapper = styled.div`
  margin-top: 112px;
`;

const PostCardsWrapper = styled.div`
  width: 100%;
  /* background-color: aqua; */
  display: grid;
  grid-template-columns: 282px 282px 282px;
  gap: 24px;
`;
