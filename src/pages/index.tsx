import styled from 'styled-components';
import { Button } from '../components/common/Button';
import { LandingInfo } from '../components/home/LandingInfo';
import { KeyOfPalette, KeyOfTypo, theme } from '../styles/theme';

function Home() {
  return (
    <Wrapper>
      <TextWrapper>
        <Space height={185} />
        <TextBox>
          <Text typo='Heading2' color='Black'>
            대학생이라면 이용해야 하는
            <br />
            IT 스펙 저장소,
          </Text>
        </TextBox>
        <Space height={12} />
        <Text typo='Gotham' color='Navy'>
          Prepare
          <br />
          Your Portfolio!
        </Text>
        <Space height={70} />
        <Button type='big' color='mint' content='바로 시작하기' />
        <Space height={174.33} />
        <LandingInfo
          title1='분야별로 스펙 활동'
          title2='모아보기'
          description1='다양한 분야의 활동 뿐 아니라'
          description2='동아리, 공모전 등 분야별로 구경할 수 있어요.'
          justify='flex-start'
        />
        <LandingInfo
          title1='자유롭게'
          title2='스크랩 하기'
          description1='다양한 분야의 스펙활동 기록을'
          description2='자유롭게 스크랩하여 저장할 수 있어요.'
          justify='flex-end'
        />
        <LandingInfo
          title1='내 스펙활동'
          title2='아카이빙'
          description1='쉽고 빠르게 스펙활동을 기록하여'
          description2='편리하게 아카이빙 해보세요.'
          justify='flex-start'
        />
      </TextWrapper>

      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
    </Wrapper>
  );
}

export default Home;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

const Section1 = styled.div`
  z-index: -1;
  background: linear-gradient(
    180deg,
    rgba(0, 234, 164, 0.1) 16.06%,
    rgba(0, 234, 164, 0) 89.31%
  );

  position: relative;

  height: 777px;
  width: 100vw;

  margin-left: calc(-50vw + 50%);
`;

const Section2 = styled.div`
  z-index: -1;
  background-color: ${theme.palette.Blue10};

  position: relative;

  height: 600px;
  width: 100vw;

  margin-left: calc(-50vw + 50%);
`;

const Section3 = styled.div`
  z-index: -1;
  background-color: ${theme.palette.Purple10};

  position: relative;

  height: 600px;
  width: 100vw;

  margin-left: calc(-50vw + 50%);
`;

const Section4 = styled.div`
  z-index: -1;
  background-color: ${theme.palette.Mint10};

  position: relative;

  height: 600px;
  width: 100vw;

  margin-left: calc(-50vw + 50%);
`;

const Section5 = styled.div`
  z-index: -1;
  background-color: #000000;

  position: relative;

  height: 777px;
  width: 100vw;

  margin-left: calc(-50vw + 50%);
`;

const TextWrapper = styled.div`
  position: absolute;
  z-index: 1;
`;

const TextBox = styled.div`
  height: 108px;
  display: flex;
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
