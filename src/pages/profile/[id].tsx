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
import { getUserPosts, getUserScraps } from '../../apis/posts';
import { userState } from '../../store/Auth/userState';
import { getScraps } from '../../apis/onClickPostContent';

const Profile = () => {
  const router = useRouter();
  const userInfo = useRecoilValue(userState);
  // console.log(userInfo);

  const watchingUserId = router.query.id;
  const isMyProfile = true; // 로그인 작업 이후 isMyProfile = (내 userId === watchingUserId)

  // 유저 정보 get api
  const nickname_ = '장영준';
  const grade_ = 2;
  const field_ = 'design';
  const likes_ = 564;
  const scraps_ = 332;

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

  const { isLoading: isPostsLoading, data: postData } = useQuery(
    ['user-posts'],
    async () => await getUserPosts(17, 0, 8, '', '')
  );

  const { isLoading: isScrapsLoading, data: scrapData } = useQuery(
    ['scrap-posts', selectedActTagList, selectedPartTagList],
    async () =>
      await getUserScraps(
        0,
        8,
        selectedPartTagList.toString().toUpperCase(),
        selectedActTagList.toString().toUpperCase()
      )
  );

  // selectedBar이 post일 경우 내가 쓴 글 get api
  const posts = postData?.data.cardPosts.reverse();

  // selectedBar이 scrap일 경우 스크랩한 글 get api
  const scraps = scrapData?.data.data.cardPosts.reverse();

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
          nickname={nickname_}
          grade={grade_}
          field={field_}
          hits={likes_}
          scraps={scraps_}
          style={{ position: 'fixed', top: '180px' }}
        />
        <div style={{ width: '100%' }} />
        <Column width="calc(100% - 282px)" alignItems="flex-start" justifyContent="flex-start" gap="46px">
          <TabBar barState={barState} setBarState={setBarState} />
          {selectedBar === 'scraps' && <TagArea width="100%" />}
          <PostCardsWrapper>
            {selectedBar === 'posts' &&
              !isPostsLoading &&
              posts?.map((postInfo: any, index: number) => {
                return (
                  <PostCard
                    key={index}
                    id={postInfo.id}
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
              !isScrapsLoading &&
              scraps.map((scrapInfo: any) => {
                return (
                  <PostCard
                    key={scrapInfo.postId}
                    id={scrapInfo.id}
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
