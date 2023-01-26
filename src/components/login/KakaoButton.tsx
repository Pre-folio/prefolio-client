import { useRouter } from 'next/router';
import { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';
import { KakaoIcon } from '../../assets/icons';
import { theme } from '../../styles/theme';

export const KakaoButton = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
  // href={process.env.NEXT_PUBLIC_KAKAO_OAUTH_URL}
  // http://localhost:3000/%60https:/kauth.kakao.com/oauth/authorize?client_id=%27448df92a872863d23fb53063e2ea6e12%27;&redirect_uri=%27http://localhost:3000/oauth/callback/kakao%27;&response_type=code`; 이렇게 이동...

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
