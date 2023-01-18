import { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';
import { KakaoIcon } from '../../assets/icons';
import { theme } from '../../styles/theme';

export const KakaoButton = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <StyledButton {...props}>
      <KakaoIcon />
      <Text>카카오 로그인/회원가입</Text>
    </StyledButton>
  );
};

const StyledButton = styled.button`
  border-radius: 12px;
  width: 384px;
  height: 70px;

  display: flex;
  align-items: center;
  background-color: #fee500;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 57px 0px 29px;
`;

const Text = styled.div<{}>`
  ${theme.typo.Heading3}
  color: #000000
`;
