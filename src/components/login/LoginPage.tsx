import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { KeyOfPalette, KeyOfTypo, theme } from '../../styles/theme';
import { KakaoButton } from './KakaoButton';

export const LoginPage = () => {
  return (
    <Wrapper>
      <Space height={104} />
      <Text typo={'Body1'} color={'Black'} height={18}>
        친구들의 스펙 활동 구경하고 싶으세요?
      </Text>
      <Space height={36} />
      <Text typo={'Heading1'} color={'Black'} height={40}>
        소셜 계정으로
      </Text>
      <Space height={20} />
      <Text typo={'Heading1'} color={'Black'} height={40}>
        프리폴리오 이용하기
      </Text>
      <Space height={60} />
      <Img src="/images/login.png" alt="" />
      <Space height={100} />
      {/* <Link href={process.env.NEXT_PUBLIC_KAKAO_OAUTH_URL!}> */}
      <a href={`${process.env.NEXT_PUBLIC_KAKAO_OAUTH_URL}`} rel={'noopener noreferrer'}>
        <KakaoButton />
      </a>
      <a href="https://kauth.kakao.com/oauth/authorize?client_id=448df92a872863d23fb53063e2ea6e12&redirect_uri=http://localhost:3000/oauth/callback/kakao&response_type=code">
        카카오 로그인
      </a>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Text = styled.div<{
  typo: KeyOfTypo;
  color: KeyOfPalette;
  height: number;
}>`
  ${({ typo }) => theme.typo[typo]};
  color: ${({ color }) => theme.palette[color]};

  display: flex;
  align-items: center;

  height: ${({ height }) => `${height}px`};
`;

const Space = styled.div<{
  height: number;
}>`
  height: ${({ height }) => `${height}px`};
`;

const Img = styled.img`
  background-color: transparent;

  height: 321px;
  width: 588px;
`;
