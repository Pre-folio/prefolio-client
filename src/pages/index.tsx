import Image from 'next/image';
import styled from 'styled-components';
import { Button } from '../components/common/Button';
import { Flex } from '../components/common/Wrapper';
import { BottomSection } from '../components/home/BottomSection';
import { InfoSection } from '../components/home/InfoSection';
import { StartSection } from '../components/home/StartSection';
import { KeyOfPalette, KeyOfTypo, theme } from '../styles/theme';

function Home() {
  return (
    <Wrapper>
      <TextWrapper>
        <StartSection />

        <InfoSection
          title1='분야별로 스펙 활동'
          title2='모아보기'
          description1='다양한 분야의 활동 뿐 아니라'
          description2='동아리, 공모전 등 분야별로 구경할 수 있어요.'
          justify='flex-start'
        />

        <InfoSection
          title1='자유롭게'
          title2='스크랩 하기'
          description1='다양한 분야의 스펙활동 기록을'
          description2='자유롭게 스크랩하여 저장할 수 있어요.'
          justify='flex-end'
        />
        <InfoSection
          title1='내 스펙활동'
          title2='아카이빙'
          description1='쉽고 빠르게 스펙활동을 기록하여'
          description2='편리하게 아카이빙 해보세요.'
          justify='flex-start'
        />
        <BottomSection />
      </TextWrapper>
      {/* prop으로 배경색, 높이 받도록 수정 */}
      <Section1 src='/images/home/home1.png' alt='' />
      <Section2 src='/images/home/home2.png' alt='' />
      <Section2 src='/images/home/home3.png' alt='' />
      <Section3 src='/images/home/home4.png' alt='' />
      <Section1 src='/images/home/home5.jpg' alt='' />
    </Wrapper>
  );
}

export default Home;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: '100%';
`;

const Section1 = styled.img`
  z-index: -1;
  position: relative;
  bottom: 0;
  left: 0;

  height: 777px;
  width: 100vw;
  margin-left: calc(-50vw + 50%);

  object-fit: cover;
`;

const Section2 = styled.img`
  z-index: -1;
  position: relative;
  bottom: 0;
  left: 0;

  position: relative;

  height: 600px;
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  object-fit: cover;
`;

const Section3 = styled.img`
  z-index: -1;
  position: relative;
  bottom: 0;
  left: 0;
  background-color: ${theme.palette.Mint10};

  height: 600px;
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  object-fit: cover;
`;

const TextWrapper = styled.div`
  position: absolute;
  z-index: 1;
`;
