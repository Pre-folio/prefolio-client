import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { dehydrate, QueryClient, useQuery } from 'react-query';
import styled from 'styled-components';
import { getLikes, getScraps } from '../../apis/onClickPostContent';
import { getPost } from '../../apis/posts';
import { PostButton } from '../../components/common/PostButton';
import { Column } from '../../components/common/Wrapper';
import { PostTagArea } from '../../components/postPage/PostTagArea';
import ProfileArea from '../../components/postPage/ProfileArea';
import TextViewer from '../../components/postPage/TextViewer';
import { IUserInfo } from '../../interfaces';
import { theme } from '../../styles/theme';

const Viewer = dynamic(() => import('../../components/postPage/TextViewer'), { ssr: false });

const Board = () => {
  const router = useRouter();
  const { postId } = router.query;
  const postIdToNumber = Number(postId);
  const { isLoading: isPostLoading, data: postData } = useQuery(
    ['post-data'],
    async () => await getPost(postIdToNumber)
  );

  // GET 요청 api 후
  const [thumbnailImgUrl, setThumbnailImgUrl] = useState<string>(''); // 썸네일 이미지 url
  const [title, setTitle] = useState<string>(''); // 제목
  const [startDate, setStartDate] = useState<string>(''); // 시작 날짜
  const [endDate, setEndDate] = useState<string>(''); // 끝 날짜
  const [createdAt, setCreatedAt] = useState<string>(''); // 생성날짜
  const [hits, setHits] = useState<number>(0); // 조회수
  const [tags, setTags] = useState<string[]>([]); // 태그
  const [tools, setTools] = useState<string[]>([]); // 사용 툴
  const [contribution, setContribution] = useState<number>(0); // 기여도
  const [task, setTask] = useState<string>(''); // 맡은 역할
  const [content, setContent] = useState<string>(''); // 게시글 글
  const [likes, setLikes] = useState<number>(0); // 좋아요수
  const [scraps, setScraps] = useState<number>(0); // 스크랩수
  const [userInfo, setUserInfo] = useState<IUserInfo>({
    grade: 0,
    nickname: '',
    profileImage: '',
    type: '',
  });
  const [isLikedButtonClicked, setIsLikedButtonClicked] = useState<boolean>(false);
  const [isScrapButtonClicked, setIsScrapButtonClicked] = useState<boolean>(false);

  useEffect(() => {
    if (!isPostLoading) {
      const data = postData?.data.data;
      console.log(data);

      setThumbnailImgUrl(data.post.thumbnail);
      setTitle(data.post.title);
      setStartDate(data.post.startDate);
      setEndDate(data.post.endDate);
      setCreatedAt(data.post.createdAt);
      setHits(data.post.hits);
      setTags(data.post.partTag.concat(data.post.actTag));
      setTools(data.post.tools);
      setContribution(data.post.contribution);
      setTask(data.post.task);
      setContent(data.post.contents);
      setLikes(data.count.likes);
      setScraps(data.count.scraps);
      setUserInfo(data.user);
      setIsLikedButtonClicked(data.isLiked);
      setIsScrapButtonClicked(data.isScrapped);
    }
  }, [isPostLoading]);

  // 스크랩 버튼 클릭 함수
  const onClickScrapButton = async () => {
    const { data, message } = await getScraps(postIdToNumber, !isScrapButtonClicked);
    if (message === 'SUCCESS') {
      setIsScrapButtonClicked(!isScrapButtonClicked);
      setScraps(data.scraps);
    }
  };

  // 좋아요 버튼 클릭 함수
  const onClickLikeButton = async () => {
    const { data, message } = await getLikes(postIdToNumber, !isLikedButtonClicked);
    if (message === 'SUCCESS') {
      setIsLikedButtonClicked(!isLikedButtonClicked);
      setLikes(data.likes);
    }
  };

  // TODO 게시글 작성자가 현재 보고 있는 유저일 경우 버튼 누르는거 막기 등

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingBottom: '100px' }}>
      <ThumbnailImageWrapper>
        <ImageUploadArea alt="썸네일 이미지" src={thumbnailImgUrl ? thumbnailImgUrl : ''} />
      </ThumbnailImageWrapper>
      <Column width="996px" justifyContent="center" alignItems="flex-start" marginTop="60px">
        <TitleArea>{title || '게시글 제목'}</TitleArea>
        <DetailInfoArea>
          <Column justifyContent="space-between" alignItems="flex-start">
            <div>
              활동 기간 : {startDate || '2022.08.29'}~{endDate || '2022.09.30'}
            </div>
            <div>작성일 : {createdAt || '2022.12.17'}</div>
          </Column>
          <div>조회수 {hits || '100'}</div>
        </DetailInfoArea>
        <PostTagArea
          style={{ marginTop: '56px' }}
          tags={tags.length !== 0 ? tags : ['']}
          tools={tools.length !== 0 ? tools : ['']}
          contribution={contribution || 80}
          role={task || 'UI 디자인, 그래픽'}
        />
        <Viewer style={{ marginTop: '72px' }} data={content} />
        <PostButtonWrapper>
          <PostButton type={'hit'} isClicked={isLikedButtonClicked} onClick={onClickLikeButton} counts={likes} />
          <PostButton type={'scrap'} isClicked={isScrapButtonClicked} onClick={onClickScrapButton} counts={scraps} />
        </PostButtonWrapper>
        <DivisionLine />
        <ProfileArea
          imageSrc={userInfo.profileImage}
          nickname={userInfo.nickname}
          grade={userInfo.grade}
          field={userInfo.type.toLowerCase()}
          style={{ marginTop: '86px' }}
        />
      </Column>
    </div>
  );
};

export default Board;

export function getServerSideProps(context: any) {
  // const router = useRouter();
  const { postId } = context.query;
  const postIdToNumber = Number(postId);
  const queryClient = new QueryClient();
  queryClient.prefetchQuery(['post-data'], async () => await getPost(postIdToNumber));
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

const ThumbnailImageWrapper = styled.div`
  width: 100vw;
  height: 560px;
  background-color: ${theme.palette.Gray15};
  display: flex;
  justify-content: center;
`;

const ImageUploadArea = styled.img`
  width: 996px;
  height: 100%;
  background-color: ${theme.palette.Gray30};
`;

const TitleArea = styled.div`
  ${theme.typo.Heading2};
`;

const DetailInfoArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  ${theme.typo.Body1}
  color: ${theme.palette.Gray30};
  margin-top: 36px;
`;

const PostButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
  margin-top: 106px;
`;

const DivisionLine = styled.div`
  display: block;
  width: 100%;
  height: 2px;
  background-color: ${theme.palette.Gray15};
  margin-top: 72px;
`;
