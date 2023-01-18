import dynamic from 'next/dynamic';
import { useState } from 'react';
import styled from 'styled-components';
import { Column } from '../../components/common/Wrapper';
import { PostTagArea } from '../../components/postPage/PostTagArea';
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

  // GET 요청 api
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

  const tags_ = ['design', 'intern'];
  const tools_ = ['피그마', '인디자인'];

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
        <Viewer style={{ marginTop: '72px' }} />
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
