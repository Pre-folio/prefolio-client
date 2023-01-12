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
      <Column style={{ padding: '40px 0px' }} gap="18px" justifyContent="center" alignItems="center">
        {type === 'scrap' ? <ImageArea>스크랩 임티</ImageArea> : <ImageArea>추천 임티</ImageArea>}
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
  background-color: ${(props) => (props.isClicked ? theme.palette.Mint30 : theme.palette.White)};
  box-shadow: ${(props) => (props.isClicked ? shadow.Button.Green : shadow.Card.Black)};
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
