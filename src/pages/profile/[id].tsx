import styled from 'styled-components';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { ProfileCard } from '../../components/common/ProfileCard';
import { Column, Row } from '../../components/common/Wrapper';
import { TabBar } from '../../components/common/TabBar';
import { PostCard } from '../../components/common/PostCard';
import { TagArea } from '../../components/common/TagArea';
import { useRecoilValue } from 'recoil';
import { selectedTagsListState } from '../../store/TagArea/tagAreaState';

const Profile = () => {
  const router = useRouter();
  const watchingUserId = router.query.id;

  // 유저 정보 get api
  const nickname_ = '장영준';
  const grade_ = 2;
  const field_ = 'design';
  const likes_ = 564;
  const scraps_ = 332;

  const [barState, setBarState] = useState<boolean>(true);
  const [selectedBar, setSelectedBar] = useState<string>('');
  const [isScrapped, setIsScrapped] = useState<boolean>(false);
  const filteredTags = useRecoilValue<string[]>(selectedTagsListState);

  useEffect(() => {
    if (barState) {
      setSelectedBar('posts');
    } else {
      setSelectedBar('scraps');
    }
  }, [barState]);

  // selectedBar이 post일 경우 내가 쓴 글 get api
  const posts = [
    {
      id: 0,
      thumbnail: '',
      title: '아모레퍼시픽 려 BM 디자인 인턴 근무 후기',
      partTag: ['dev', 'design'],
      actTag: ['intern', 'project'],
      hits: 0,
      createdAt: '2023-01-19T08:02:00.340Z',
      isScrapped: false,
    },
    {
      id: 1,
      thumbnail: '',
      title: '아모레퍼시픽 려 BM 디자인 인턴 근무 후기',
      partTag: ['dev', 'design'],
      actTag: ['intern', 'project'],
      hits: 0,
      createdAt: '2023-01-19T08:02:00.340Z',
      isScrapped: true,
    },
    {
      id: 2,
      thumbnail: '',
      title: '아모레퍼시픽 려 BM 디자인 인턴 근무 후기',
      partTag: ['dev', 'design'],
      actTag: ['intern', 'project'],
      hits: 0,
      createdAt: '2023-01-19T08:02:00.340Z',
      isScrapped: false,
    },
    {
      id: 3,
      thumbnail: '',
      title: '아모레퍼시픽 려 BM 디자인 인턴 근무 후기',
      partTag: ['dev', 'design'],
      actTag: ['intern', 'project'],
      hits: 0,
      createdAt: '2023-01-19T08:02:00.340Z',
      isScrapped: false,
    },
  ];
  // selectedBar이 scrap일 경우 스크랩한 글 get api
  const scraps = [
    {
      id: 0,
      thumbnail: '',
      title: '아모레퍼시픽 려 BM 디자인 인턴 근무 후기',
      partTag: ['dev', 'design'],
      actTag: ['intern', 'project'],
      hits: 0,
      createdAt: '2023-01-19T08:02:00.340Z',
    },
    {
      id: 1,
      thumbnail: '',
      title: '아모레퍼시픽 려 BM 디자인 인턴 근무 후기',
      partTag: ['dev', 'design'],
      actTag: ['intern', 'project'],
      hits: 0,
      createdAt: '2023-01-19T08:02:00.340Z',
    },
    {
      id: 2,
      thumbnail: '',
      title: '아모레퍼시픽 려 BM 디자인 인턴 근무 후기',
      partTag: ['dev', 'design'],
      actTag: ['intern', 'project'],
      hits: 0,
      createdAt: '2023-01-19T08:02:00.340Z',
    },
    {
      id: 3,
      thumbnail: '',
      title: '아모레퍼시픽 려 BM 디자인 인턴 근무 후기',
      partTag: ['dev', 'design'],
      actTag: ['intern', 'project'],
      hits: 0,
      createdAt: '2023-01-19T08:02:00.340Z',
    },
  ];

  //
  const filteredScraps = scraps.filter((scrap) => {
    const scrapsTags = scrap.actTag.concat(scrap.partTag);
    if (filteredTags.every((tag) => scrapsTags.includes(tag))) {
      return scrap;
    }
  });

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
              posts.map((postInfo: any) => {
                return (
                  <PostCard
                    key={postInfo.id}
                    scrapped={postInfo.isScrapped}
                    title={postInfo.title}
                    field={postInfo.partTag}
                    activity={postInfo.actTag}
                    postDate={postInfo.createdAt.slice(0, 10)}
                    hits={postInfo.hits}
                  />
                );
              })}
            {selectedBar === 'scraps' &&
              filteredScraps.map((scrapInfo: any) => {
                return (
                  <PostCard
                    key={scrapInfo.id}
                    scrapped={true}
                    title={scrapInfo.title}
                    field={scrapInfo.partTag}
                    activity={scrapInfo.actTag}
                    postDate={scrapInfo.createdAt.slice(0, 10)}
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
