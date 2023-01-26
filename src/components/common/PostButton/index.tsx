import React from 'react';
import styled from 'styled-components';
import { shadow, theme } from '../../../styles/theme';
import { Column } from '../Wrapper';

interface PostButtonProps {
  type?: 'scrap' | 'hit' | any;
  isClicked?: boolean;
  counts?: number;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

/**
 *
 * @param type scrap hit 중 택 1
 * @param isClicked
 * @param counts 카운트수
 * @param onClick
 * @returns
 */
export function PostButton({ type, isClicked, counts, onClick }: PostButtonProps) {
  return (
    <Wrapper isClicked={isClicked} onClick={onClick}>
      <Column gap="18px" justifyContent="center" alignItems="center">
        {type === 'scrap' ? (
          isClicked ? (
            <img
              className="scrap-cancel-img"
              alt="스크랩 취소 이미지"
              src="/src/postPage/scrap_cancel.png"
              width={78}
              height={78}
            />
          ) : (
            <img className="scrap-img" alt="스크랩 이미지" src="/src/postPage/scrap.png" width={78} height={78} />
          )
        ) : isClicked ? (
          <img
            className="hit-cancel-img"
            alt="추천 취소 이미지"
            src="/src/postPage/hit_cancel.png"
            width={78}
            height={78}
          />
        ) : (
          <img className="hit-img" alt="추천 이미지" src="/src/postPage/hit.png" width={78} height={78} />
        )}
        <TextArea>
          {type === 'scrap' ? (isClicked ? '스크랩 취소' : '스크랩 하기') : isClicked ? '추천 취소' : '추천 하기'}
        </TextArea>
        <CountArea>{counts}</CountArea>
      </Column>
    </Wrapper>
  );
}

const Wrapper = styled.button<PostButtonProps>`
  width: 180px;
  height: 236px;
  border-radius: 14px;
  padding: 40px 0px;
  background-color: ${(props) => (props.isClicked ? theme.palette.Mint30 : theme.palette.White)};
  box-shadow: ${(props) => (props.isClicked ? shadow.Button.Green : shadow.Card.Black)};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImageArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 78px;
  height: 78px;
`;

const TextArea = styled.div`
  ${theme.typo.Body1}
`;

const CountArea = styled.div`
  ${theme.typo.Heading3}
  display: flex;
  /* justify-content: center; */
  align-items: center;
  height: 24px;
`;
