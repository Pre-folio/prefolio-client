import styled from 'styled-components';
import React from 'react';
import { shadow, theme } from '../../../styles/theme';

interface ButtonProps {
  type: 'big' | 'medium' | 'small' | 'popup';
  color?: string;
  content?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

interface IButton {
  color?: 'mint' | 'gray' | 'navy' | any;
}

export function Button({ type, color, content, onClick }: ButtonProps) {
  return type === 'big' ? (
    // 버튼_대는 mint color 밖에 없음
    <BigButton color={color} onClick={onClick}>
      {content || '시작하기'}
    </BigButton>
  ) : type === 'medium' ? (
    <MediumButton color={color} onClick={onClick}>
      {content || '로그인/가입'}
    </MediumButton>
  ) : type === 'small' ? (
    // 버튼_소는 white color 밖에 없음
    <SmallButton color={color} onClick={onClick}>
      {content || '이미지 업로드'}
    </SmallButton>
  ) : type === 'popup' ? (
    <PopupButton color={color} onClick={onClick}>
      {content || '업로드하기'}
    </PopupButton>
  ) : (
    <></>
  );
}

const DefaultButton = styled.button<IButton>`
  background-color: ${(props) =>
    props.color === 'mint'
      ? theme.palette.Mint100
      : props.color === 'gray'
      ? theme.palette.Gray10
      : props.color === 'navy'
      ? theme.palette.Navy
      : props.color === 'white' && theme.palette.White};
  color: ${(props) =>
    props.color === 'mint'
      ? theme.palette.Navy
      : props.color === 'gray'
      ? theme.palette.Gray40
      : props.color === 'navy'
      ? theme.palette.Mint100
      : props.color === 'white' && theme.palette.Black};
  box-shadow: ${(props) =>
    props.color === 'mint'
      ? shadow.Button.Green
      : props.color === 'gray'
      ? ''
      : props.color === 'navy'
      ? shadow.Button.Black
      : props.color === 'white' && shadow.Card.Black};
`;

const BigButton = styled(DefaultButton)`
  width: auto;
  height: 60px;
  padding: 18px 70px;
  font-size: ${theme.typo.Heading3};
  border-radius: 14px;
`;

const MediumButton = styled(DefaultButton)`
  width: auto;
  height: 46px;
  padding: 14px 30px;
  font-size: ${theme.typo.Label1};
  border-radius: 10px;
`;

const SmallButton = styled(DefaultButton)`
  width: auto;
  height: 34px;
  padding: 8px 20px;
  font-size: ${theme.typo.Body1};
  border-radius: 6px;
`;

const PopupButton = styled(DefaultButton)`
  width: 282px;
  height: 60px;
  padding: 18px 0px;
  font-size: ${theme.typo.Heading3};
  border-radius: 10px;
`;
