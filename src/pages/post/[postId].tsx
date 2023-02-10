import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { dehydrate, QueryClient, useQuery } from '@tanstack/react-query';
import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { deletePost, getLikes, getScraps } from '../../apis/postContent';
import { getPost } from '../../apis/posts';
import { PostButton } from '../../components/common/PostButton';
import { Column } from '../../components/common/Wrapper';
import { FloatingButton } from '../../components/postPage/FloatingButton';
import { PostTagArea } from '../../components/postPage/PostTagArea';
import ProfileArea from '../../components/postPage/ProfileArea';
import { IUserInfo } from '../../interfaces';
import { theme } from '../../styles/theme';
import { userState } from '../../store/Auth/userState';
import { GetServerSideProps } from 'next';
import { getCookie } from '../../utils/cookie';
import { ConfirmationPopUp } from '../../components/common/ConfirmationPopUp';
import { isPostDeleteButtonClickedState } from '../../store/Popup/popupState';
import { useToast } from '../../hooks/useToasts';
import { Toast } from '../../components/common/Toast';
import { toastTypeState } from '../../store/Toast/toastState';

const Board = (props: any) => {
  const Viewer = dynamic(() => import('../../components/postPage/TextViewer'), {
    ssr: false,
  });
  const router = useRouter();

  const { postId } = props;
  const userInfo = useRecoilValue(userState);
  const [isPostDeleteButtonClicked, setIsPostDeleteButtonClicked] = useRecoilState(isPostDeleteButtonClickedState);
  const toastType = useRecoilValue(toastTypeState);

  const { isLoading: isPostLoading, data: postData } = useQuery(
    ['post-data'],
    async () => await getPost(postId, getCookie())
  );

  const replaceDate = (date: any) => {
    return date.replaceAll('-', '.');
  };

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
  const [postAuthInfo, setPostAuthInfo] = useState<IUserInfo>({
    id: 0,
    grade: 0,
    nickname: '',
    profileImage: '',
    type: '',
  });
  const [isLikedButtonClicked, setIsLikedButtonClicked] = useState<boolean>(false);
  const [isScrapButtonClicked, setIsScrapButtonClicked] = useState<boolean>(false);
  const isAuth = postAuthInfo.id === userInfo.userId;
  const { openToast } = useToast();

  useEffect(() => {
    if (!isPostLoading) {
      const data = postData?.data.data;

      setThumbnailImgUrl(data.post.thumbnail);
      setTitle(data.post.title);
      setStartDate(data.post.startDate);
      setEndDate(data.post.endDate);
      const createdAtDate: any = replaceDate(data.post.createdAt);
      setCreatedAt(createdAtDate);
      setHits(data.post.hits);
      setTags(data.post.partTag.concat(data.post.actTag));
      setTools(data.post.tools);
      setContribution(data.post.contribution);
      setTask(data.post.task);
      setContent(data.post.contents);
      setLikes(data.count.likes);
      setScraps(data.count.scraps);
      setPostAuthInfo(data.user);
      setIsLikedButtonClicked(data.isLiked);
      setIsScrapButtonClicked(data.isScrapped);
    }
  }, [isPostLoading]);

  // 좋아요 버튼 클릭 함수
  const onClickLikeButton = async () => {
    if (isAuth) {
      openToast('자신의 글을 추천할 수 없습니다.', 'error');
      return;
    } else {
      const { data, message } = await getLikes(getCookie(), postId);
      if (message === 'SUCCESS') {
        setIsLikedButtonClicked(!isLikedButtonClicked);
        setLikes(data.likes);
      }
    }
  };

  // 스크랩 버튼 클릭 함수
  const onClickScrapButton = async () => {
    if (isAuth) {
      openToast('자신의 글을 스크랩할 수 없습니다.', 'error');
      return;
    } else {
      const { data, message } = await getScraps(getCookie(), postId);
      if (message === 'SUCCESS') {
        setIsScrapButtonClicked(!isScrapButtonClicked);
        setScraps(data.scraps);
      }
    }
  };

  return (
    <>
      <Toast varient={toastType} />
      {isPostDeleteButtonClicked && (
        <ConfirmationPopUp
          type="delete"
          style={{ position: 'absolute', zIndex: 100 }}
          handleUploadButtonClick={() => {
            deletePost(getCookie(), postId);
            openToast('게시물이 성공적으로 삭제되었어요!', 'success');
            router.push('/feed');
          }}
          handleCancelButtonClick={() => {
            setIsPostDeleteButtonClicked(false);
          }}
        />
      )}
      {postData?.status === 200 && isAuth && (
        <FloatingButtonWrapper>
          <FloatingButton postId={postId} />
        </FloatingButtonWrapper>
      )}
      {postData?.status === 200 && (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            paddingBottom: '100px',
          }}
        >
          <ThumbnailImageWrapper src={thumbnailImgUrl}>
            <div
              style={{
                width: '100%',
                height: '100%',
                backdropFilter: 'blur(10px)',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <ImageUploadArea alt="썸네일 이미지" src={thumbnailImgUrl ? thumbnailImgUrl : ''} />
            </div>
          </ThumbnailImageWrapper>
          <Column width="996px" justifyContent="center" alignItems="flex-start" marginTop="60px">
            <TitleArea>{title}</TitleArea>
            <DetailInfoArea>
              <Column justifyContent="space-between" alignItems="flex-start">
                <div>
                  활동 기간 : {startDate}~{endDate}
                </div>
                <div>작성일 : {createdAt}</div>
              </Column>
              <div>조회수 {hits}</div>
            </DetailInfoArea>
            <PostTagArea
              style={{ marginTop: '56px' }}
              tags={tags.length !== 0 ? tags : ['']}
              tools={tools.length !== 0 ? tools : []}
              contribution={contribution}
              role={task}
            />
            <Viewer style={{ marginTop: '72px' }} data={content} />

            <PostButtonWrapper>
              <PostButton type={'hit'} isClicked={isLikedButtonClicked} onClick={onClickLikeButton} counts={likes} />
              <PostButton
                type={'scrap'}
                isClicked={isScrapButtonClicked}
                onClick={onClickScrapButton}
                counts={scraps}
              />
            </PostButtonWrapper>

            <DivisionLine />
            <ProfileArea
              userId={postAuthInfo.id}
              imageSrc={postAuthInfo.profileImage}
              nickname={postAuthInfo.nickname}
              grade={postAuthInfo.grade}
              field={postAuthInfo.type.toLowerCase()}
              style={{ marginTop: '86px' }}
            />
          </Column>
        </div>
      )}
    </>
  );
};

export default Board;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { postId }: any = context.query;
  const postIdToNumber = Number(postId);
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(['post-data'], async () => await getPost(postIdToNumber, getCookie()));
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      postId: postIdToNumber,
    },
  };
};

const FloatingButtonWrapper = styled.div`
  position: fixed;
  top: 700px;
  margin-right: 10px;
`;

const ThumbnailImageWrapper = styled.div<{ src: string }>`
  width: 100vw;
  @media screen and (max-width: 1200px) {
    width: 1200px;
  }
  height: 560px;

  background-color: ${theme.palette.Gray15};
  background-image: ${({ src }) => `url(${src})`};
  background-size: cover;
  background-position: center;

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
