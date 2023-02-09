import { SetterOrUpdater, useRecoilValue } from 'recoil';
import styled, { css } from 'styled-components';
import { theme } from '../../../styles/theme';
import { Tag } from '../Tag';
import { ScrappIcon } from '../../../assets/icons';
import React, { MouseEventHandler, useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import postAPI from '../../../apis/post';
import { useToast } from '../../../hooks/useToasts';
import { Toast } from '../Toast';
import { toastTypeState } from '../../../store/Toast/toastState';

// 나중에 PostProps 만들어서 Post 객체 전체를 받아오는 걸로 수정
export interface PostCardProps {
  // scrap post 위해서는 id도 props로 받아야 할 것임
  thumbnail?: string;
  isScrapped: boolean;
  // setScrapped?: SetterOrUpdater<boolean>;
  title: string;
  field: string[];
  activity: string[];
  postDate: string;
  hits: number;
  id: number;
  isMyPost?: boolean;
}

/**
 * @param thumbnail?: string (썸네일 주소)
 *
 * @param scrapped: boolean
 * @param setScrapped: SetterOrUpdater<boolean>
 *
 * @param title: string (게시글 제목)
 * @param field: string[] (분야)
 * @param activity: sting[] (활동)
 * @param postDate: string (게시일)
 * @param hits: number (조회수)
 * ---------------------------------------
 * [scrapped, SetScrapped] = useRecoilState(false)
 * false: 오른쪽
 */

export const PostCard = (props: PostCardProps) => {
  const router = useRouter();
  const ref = useRef<HTMLDivElement | null>(null);
  const [iconFillColor, setIconFillColor] = useState('none');
  const [iconStrokeColor, setIconStrokeColor] = useState(
    `${theme.palette.Gray20}`
  );
  const [scrap, setScrap] = useState<boolean>(props.isScrapped);
  const { openToast } = useToast();
  const toastType = useRecoilValue(toastTypeState);

  const handleIconClick = async (e: any) => {
    e.stopPropagation();
    if (props.isMyPost) {
      openToast('자신의 글은 스크랩할 수 없어요.', 'error');
    } else {
      const res = await postAPI.SCRAP(props.id);
      if (e.target === ref.current?.childNodes[0]) {
        setScrap(res.isScrapped);
      } else if (e.target === ref.current?.childNodes[0].childNodes[0]) {
        setScrap(res.isScrapped);
      }
    }
  };

  useEffect(() => {
    if (!props.isMyPost) {
      if (scrap) {
        setIconFillColor(`${theme.palette.Mint100}`);
        setIconStrokeColor(`${theme.palette.Mint100}`);
      } else {
        setIconFillColor('none');
        setIconStrokeColor(`${theme.palette.Gray20}`);
      }
    }
  }, [scrap]);

  return (
    <PostCardWrapper onClick={() => router.push(`/post/${props.id}`)}>
      <MockThumbnail>
        <Thumbnail src={props.thumbnail ? props.thumbnail : ''} />
        <ScrappIconWrapper ref={ref} onClick={handleIconClick}>
          <ScrappIcon fill={iconFillColor} stroke={iconStrokeColor} />
        </ScrappIconWrapper>
      </MockThumbnail>

      <ContentsWrapper>
        <Title>{props.title}</Title>
        <TagsWrapper>
          {props.field.map((index) => (
            <Tag
              key={index}
              type={'field'}
              sort={index}
              style={{ boxShadow: 'none' }}
            />
          ))}
          {props.activity.map((index) => (
            <Tag
              key={index}
              type={'activity'}
              sort={index}
              style={{ boxShadow: 'none' }}
            />
          ))}
        </TagsWrapper>
        <PostInfoWrapper>
          <PostInfo>{props.postDate}</PostInfo>
          <PostInfo>{`조회수  ${props.hits}`}</PostInfo>
        </PostInfoWrapper>
      </ContentsWrapper>
    </PostCardWrapper>
  );
};

const PostCardWrapper = styled.div`
  border-radius: 10px;
  width: 282px;

  background-color: ${theme.palette.White};
  box-shadow: ${theme.shadow.Card.Black};

  display: flex;
  flex-direction: column;

  cursor: pointer;
`;

const Thumbnail = styled.img`
  /* border-radius: 10px 10px 0px 0px; */
  border-radius: 10px 10px 0px 0px;
  width: 282px;
  height: 158px;
  display: flex;
  justify-content: flex-end;
  object-fit: cover;
  z-index: 1;
  position: relative;
`;

const MockThumbnail = styled.div`
  border-radius: 10px 10px 0px 0px;
  width: 282px;
  height: 158px;

  background-color: ${theme.palette.Gray10};

  display: flex;
  justify-content: flex-end;
  position: relative;
`;

const ScrappIconWrapper = styled.div`
  z-index: 2;
  margin: 24px 20px 0px 0px;

  width: 20px;
  height: 20px;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  position: absolute;
`;

const ContentsWrapper = styled.div`
  padding: 20px 20px 24px 20px;
  width: 282px;

  display: flex;
  flex-direction: column;

  gap: 20px;
`;

const Title = styled.div`
  white-space: pre-wrap;
  word-break: break-all;
  text-overflow: clip;
  overflow: hidden;

  width: 242px;
  height: 60px;

  ${theme.typo.Heading4}
  color: ${theme.palette.Black};
`;

const TagsWrapper = styled.div`
  width: 242px;
  height: 68px;

  display: flex;
  align-items: space-between;
  flex-wrap: wrap;
  row-gap: 12px;
  column-gap: 8px;

  /* overflow: hidden; */
`;

const PostInfoWrapper = styled.div`
  width: 242px;
  height: 16px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const PostInfo = styled.div`
  height: 100%;

  display: flex;
  align-items: center;

  ${theme.typo.Body2}
  color: ${theme.palette.Gray40}
`;
