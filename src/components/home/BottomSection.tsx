import { useRouter } from 'next/router';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { isLoggedInState } from '../../store/LoggedIn/loggedInState';
import { KeyOfPalette, KeyOfTypo, theme } from '../../styles/theme';
import { Button } from '../common/Button';

export const BottomSection = () => {
  const isLoggedIn = useRecoilValue(isLoggedInState);
  const router = useRouter();

  const handleButtonClick = () => {
    if (isLoggedIn) {
      router.push('/feed');
    } else {
      router.push('/login');
    }
  };
  return (
    <Section>
      <Space height={248} />
      <TextFlex>
        <Text typo="Landing" color="White">
          친구의 스펙 구경하고
        </Text>
        <Text typo="Landing" color="White">
          나의 활동도 기록하세요!
        </Text>
        <Space height={56} />
        <Button type="big" color="mint" content="바로 시작하기" onClick={handleButtonClick} />
      </TextFlex>
      <Space height={233} />
    </Section>
  );
};

const Section = styled.section`
  height: 100vh;
  width: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 1200px) {
    margin-left: 0;
  }
`;

const TextFlex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Text = styled.div<{
  typo: KeyOfTypo;
  color: KeyOfPalette;
}>`
  ${({ typo, theme }) => theme.typo[typo]};
  color: ${({ color }) => theme.palette[color]};
`;

const Space = styled.div<{
  height: number;
}>`
  height: ${({ height }) => `${height}px`};
`;
