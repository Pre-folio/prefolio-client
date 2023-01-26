import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { KeyOfPalette, KeyOfTypo, theme } from '../../styles/theme';
import { KakaoButton } from './KakaoButton';

export const LoginPage = () => {
  const router = useRouter();
  const KAKAO = process.env.NEXT_PUBLIC_KAKAO_OAUTH_URL;
  console.log(KAKAO);
  console.log(process.env.NEXT_PUBLIC_REDIRECT_URI);
  const externalLink = {
    url: 'https://www.naver.com',
  };

  return (
    <Wrapper>
      <Space height={106} />
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
      <Img />
      <Space height={100} />
      {/* <Link href={process.env.NEXT_PUBLIC_KAKAO_OAUTH_URL!}> */}
      <a href={`${process.env.NEXT_PUBLIC_KAKAO_OAUTH_URL}`} rel={'noopener noreferrer'}>
        <KakaoButton />
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

const Img = styled.div`
  background-color: ${theme.palette.Gray20};

  height: 306px;
  width: 488px;
`;
