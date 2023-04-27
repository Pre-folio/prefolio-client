import styled from 'styled-components';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { ProfileCard } from '../../components/common/ProfileCard';
import { Column, Row } from '../../components/common/Wrapper';
import { TabBar } from '../../components/common/TabBar';
import { PostCard } from '../../components/common/PostCard';
import { TagArea } from '../../components/common/TagArea';
import { useRecoilState, useRecoilValue } from 'recoil';
import { Space, Text } from '../../components/common/Wrapper';

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
import { QueryClient, useQuery } from '@tanstack/react-query';
import { GetServerSideProps } from 'next';

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
    token: getCookie(),
    pageNum: 0,
    limit: 50,
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
      token: getCookie(),
      pageNum: 0,
      limit: 50,
      partTagList: type.join(','),
      actTagList: act.join(','),
    });
  }, [act, type]);

  const { isLoading: isPostsLoading, data: postData } = useQuery(
    ['user-posts', watchingUserIdToNumber],
    async () => {
      if (watchingUserIdToNumber) {
        return await getUserPosts(
          getCookie(),
          watchingUserIdToNumber,
          0,
          24,
          '',
          ''
        );
      }
    }
  );

  const { isLoading: isScrapsLoading, data: scrapData } = useQuery(
    ['scrap-posts', feedParam],
    async () => {
      return await getUserScraps(getCookie(), feedParam);
    }
  );

  // selectedBar이 post일 경우 내가 쓴 글 get api
  const posts = postData?.data.cardPosts;
  // const posts: any[] = [];

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
          isMyProfile={isMyProfile}
          imageSrc={profileData?.profileImage}
          nickname={profileData?.nickname}
          grade={profileData?.grade}
          field={profileData?.type}
          hits={profileData?.countLike}
          scraps={profileData?.countScrap}
          style={{ position: 'sticky', top: '180px' }}
        />
        <div style={{}} />
        <Column
          width='calc(100% - 282px)'
          alignItems='flex-start '
          justifyContent='flex-start !important'
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
          {selectedBar === 'posts' &&
            !isPostsLoading &&
            (posts?.length !== 0 ? (
              <PostCardsWrapper>
                {posts?.map((postInfo: any, index: number) => {
                  return (
                    <PostCard
                      key={index}
                      id={postInfo.postId}
                      thumbnail={postInfo.thumbnail}
                      isScrapped={postInfo.isScrapped}
                      title={postInfo.title}
                      field={postInfo.partTag}
                      activity={postInfo.actTag}
                      postDate={postInfo.createdAt}
                      hits={postInfo.hits}
                      isMyPost={postInfo.isMine}
                    />
                  );
                })}
              </PostCardsWrapper>
            ) : (
              <NoPost
                text={
                  <>
                    <Text typo={'Heading3'} color={'Gray30'} height={34}>
                      앗, 아직 작성한 게시글이 없어요!
                    </Text>
                  </>
                }
              />
            ))}
          {selectedBar === 'scraps' &&
            !isScrapsLoading &&
            (scraps?.length !== 0 ? (
              <PostCardsWrapper>
                {scraps.map((scrapInfo: any) => {
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
            ) : (
              <NoPost
                text={
                  <div style={{ height: '100%', justifyContent: 'center' }}>
                    <Text typo={'Heading3'} color={'Gray30'} height={34}>
                      앗, 찾으시는 내용에 대한 결과가 없어요!
                    </Text>
                  </div>
                }
              />
            ))}
        </Column>
      </Row>
    </Wrapper>
  );
};

export default Profile;

// export const getServerSideProps: GetServerSideProps = async(context) => {
//   const {id} = context.query
//   const idToNumber = Number(id);
//   const queryClient = new QueryClient();

//   await queryClient.prefetchQuery(
//     ['user-posts', watchingUserIdToNumber]
//   )
// }

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
