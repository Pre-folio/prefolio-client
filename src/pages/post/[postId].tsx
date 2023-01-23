import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getPosts } from '../../apis/posts';
import { PostButton } from '../../components/common/PostButton';
import { Column } from '../../components/common/Wrapper';
import { PostTagArea } from '../../components/postPage/PostTagArea';
import ProfileArea from '../../components/postPage/ProfileArea';
import TextViewer from '../../components/postPage/TextViewer';
import { theme } from '../../styles/theme';

const Viewer = dynamic(() => import('../../components/postPage/TextViewer'), { ssr: false });

const Board = () => {
  /*
  {
  "thumbnail": "string",
  "title": "string",
  "startDate": "string",
  "endDate": "string",
  "contribution": 0,
  "tools": "string",
  "partTag": "string",
  "actTag": "string",
  "contents": "string"
  }
  */

  useEffect(() => {
    getPosts(46);
  }, []);

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
  const [role, setRole] = useState<string>(''); // 맡은 역할
  const [likes, setLikes] = useState<number>(0); // 좋아요수
  const [scraps, setScraps] = useState<number>(0); // 스크랩수
  const [textContent, setTextContent] = useState<string>(''); // text body
  const [auth, setAuth] = useState<string>('');
  const [isHitButtonClicked, setIsHitButtonClicked] = useState<boolean>(false);
  const [isScrapButtonClicked, setIsScrapButtonClicked] = useState<boolean>(false);

  const tags_ = ['design', 'intern'];
  const tools_ = ['피그마', '인디자인'];
  const [likes_, setLikes_] = useState(10);
  const [scraps_, setScraps_] = useState(10);

  // TODO 게시글 작성자가 현재 보고 있는 유저일 경우 버튼 누르는거 막기 등

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingBottom: '100px' }}>
      <ThumbnailImageWrapper>
        <ImageUploadArea alt="썸네일 이미지" src="" />
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
          tags={tags.length !== 0 ? tags : tags_}
          tools={tools.length !== 0 ? tools : tools_}
          contribution={contribution || 80}
          role={role || 'UI 디자인, 그래픽'}
        />
        <Viewer
          style={{ marginTop: '72px' }}
          data={
            '<p>일단 나는 3학년 1학기까지 마치고 휴학을 한 상태였고, 방학 시즌에는 계약직 인턴 공고가 많이 뜨기 때문에 미리 포폴을 준비하고 있었다. 그동안 해온 프로젝트들을 통일성 있게 모으는 것이 생각보다 힘들었다. 시간이 좀 지난 프로젝트 같은 경우는 리서치 과정이 잘 기억이 나지 않기도 했고, 예전에 했던 작업을 보면 마음에 안 드는 부분이 자꾸 거슬리기도 했다. 그래서 포트폴리오로 추리면서 최대한 퀄리티가 괜찮은 작업들을 골랐는데, 분야별로 꼭 개인작업이 1개 이상은 포함되도록 구성했다. 그리고 팀작업의 경우 내가 맡은 부분의 장점이 잘 부각되는 것들 위주로 넣었다. 나는 브랜딩 직무로 지원을 했지만 포폴에는 UXUI 프로젝트가 더 많았어서, 이런 것들 중 그래픽 작업 비중이 높은 프로젝트 위주로 구성했다.</p><img src="/src/postPage/scrap_cancel.png"/><p>위에는 우리 멋진 디자이너들이 만든 3d 게시글 버튼이다.</p>'
          }
        />
        <PostButtonWrapper>
          <PostButton
            type={'hit'}
            isClicked={isHitButtonClicked}
            onClick={() => {
              setIsHitButtonClicked(!isHitButtonClicked);
              if (isHitButtonClicked) {
                setLikes_(likes_ - 1);
              } else {
                setLikes_(likes_ + 1);
              }
            }}
            counts={likes_}
          />
          <PostButton
            type={'scrap'}
            isClicked={isScrapButtonClicked}
            onClick={() => {
              setIsScrapButtonClicked(!isScrapButtonClicked);
              if (isScrapButtonClicked) {
                setScraps_(scraps_ - 1);
              } else {
                setScraps_(scraps_ + 1);
              }
            }}
            counts={scraps_}
          />
        </PostButtonWrapper>
        <DivisionLine />
        <ProfileArea style={{ marginTop: '86px' }} />
      </Column>
    </div>
  );
};

export default Board;

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
