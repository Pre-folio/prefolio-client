import styled from 'styled-components';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { ProfileCard } from '../../components/common/ProfileCard';
import { Column, Row } from '../../components/common/Wrapper';
import { TabBar } from '../../components/common/TabBar';
import { PostCard } from '../../components/common/PostCard';
import { TagArea } from '../../components/common/TagArea';
import { useRecoilState, useRecoilValue } from 'recoil';
import {
  selectedActTagListState,
  selectedPartTagListState,
  selectedTagsListState,
} from '../../store/TagArea/tagAreaState';
import { useQuery } from 'react-query';
import { authAPI } from '../../apis/auth';
import { getUserPosts, getUserScraps } from '../../apis/posts';
import { userState } from '../../store/Auth/userState';
import { getScraps } from '../../apis/onClickPostContent';
import { getCookie } from '../../utils/cookie';

const Profile = () => {
  const router = useRouter();
  const [watchingUserInfo, setWatchingUserInfo] = useState({});
  const userInfo = useRecoilValue(userState);
  const watchingUserId = router.query.id;
  const watchingUserIdToNumber = Number(watchingUserId);

  const token = getCookie();

  const { isLoading: isProfileLoading, data: profileData } = useQuery(
    ['profile-user-info', watchingUserId],
    async () => {
      const res = await authAPI.USER_INFO({
        accessToken: token,
        isMember: true,
        userId: watchingUserIdToNumber,
      });
      return res;
    }
  );

  const isMyProfile = userInfo.userId === watchingUserIdToNumber;
  console.log(isMyProfile);

  const [barState, setBarState] = useState<boolean>(true);
  const [selectedBar, setSelectedBar] = useState<string>('');
  const [posts_, setPosts_] = useState([]);
  const [isScrapped, setIsScrapped] = useState<boolean>(false);
  const filteredTags = useRecoilValue<string[]>(selectedTagsListState);
  const [selectedActTagList, setSelectedActTagList] = useRecoilState(selectedActTagListState);
  const [selectedPartTagList, setSelectedPartTagList] = useRecoilState(selectedPartTagListState);

  useEffect(() => {
    if (barState) {
      setSelectedBar('posts');
    } else {
      setSelectedBar('scraps');
    }
  }, [barState]);

  const { isLoading: isPostsLoading, data: postData } = useQuery(['user-posts', watchingUserIdToNumber], async () => {
    if (watchingUserIdToNumber) {
      return await getUserPosts(watchingUserIdToNumber, 0, 8, '', '');
    }
  });

  // const { isLoading: isScrapsLoading, data: scrapData } = useQuery(
  //   ['scrap-posts', selectedActTagList, selectedPartTagList],
  //   async () =>
  //     await getUserScraps(
  //       0,
  //       8,
  //       selectedPartTagList.toString().toUpperCase(),
  //       selectedActTagList.toString().toUpperCase()
  //     )
  // );

  // selectedBar이 post일 경우 내가 쓴 글 get api
  const posts = postData?.data.cardPosts;

  // selectedBar이 scrap일 경우 스크랩한 글 get api
  // const scraps = scrapData?.data.data.cardPosts;
  const scraps: any = [];

  // const filteredScraps = scraps.filter((scrap: any) => {
  //   const scrapsTags = scrap.actTag.concat(scrap.partTag);
  //   if (filteredTags.every((tag) => scrapsTags.includes(tag))) {
  //     return scrap;
  //   }
  // });

  return (
    <Wrapper>
      <Row width="100%" alignItems="flex-start" justifyContent="flex-start" gap="24px">
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
        <Column width="calc(100% - 282px)" alignItems="flex-start" justifyContent="flex-start" gap="46px">
          {isMyProfile && <TabBar barState={barState} setBarState={setBarState} />}
          {selectedBar === 'scraps' && <TagArea width="100%" />}
          <PostCardsWrapper>
            {selectedBar === 'posts' &&
              !isPostsLoading &&
              posts?.map((postInfo: any, index: number) => {
                return (
                  <PostCard
                    key={index}
                    id={postInfo.postId}
                    thumbnail={postInfo.thumbnail}
                    scrapped={postInfo.isScrapped}
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
              // !isScrapsLoading &&
              scraps.map((scrapInfo: any) => {
                return (
                  <PostCard
                    key={scrapInfo.postId}
                    id={scrapInfo.postId}
                    thumbnail={scrapInfo.thumbnail}
                    scrapped={true}
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
