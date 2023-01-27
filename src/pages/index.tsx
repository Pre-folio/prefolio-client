import Image from 'next/image';
import styled from 'styled-components';
import { Button } from '../components/common/Button';
import { Toast } from '../components/common/Toast';
import { Flex } from '../components/common/Wrapper';
import { BottomSection } from '../components/home/BottomSection';
import { InfoSection } from '../components/home/InfoSection';
import { StartSection } from '../components/home/StartSection';
import { KeyOfPalette, KeyOfTypo, theme } from '../styles/theme';

function Home() {
  return (
    <>
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
      </Wrapper>
      <ImgWrapper>
        <Section1 src='/images/home/home1.png' alt='' />
        <Section2 src='/images/home/home2.png' alt='' />
        <Section2 src='/images/home/home3.png' alt='' />
        <Section3 src='/images/home/home4.png' alt='' />
        <Section1 src='/images/home/home5.jpg' alt='' />
      </ImgWrapper>
    </>
  );
}

export default Home;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

const ImgWrapper = styled.div`
  position: relative;
  width: 100vw;
  left: 0vw;
  margin-left: calc(-50vw + 50%);
  @media screen and (max-width: 1200px) {
    width: 1200px;
    margin-left: 0;
  }
`;

const Section1 = styled.img`
  //height: 777px;
  height: 100vh - 74px;
  width: 100vw;

  //flex-basis: 100vw;

  @media screen and (max-width: 1200px) {
    width: 1200px;
    margin-left: 0;
  }
  display: flex;
  object-fit: cover;
`;

const Section2 = styled.img`
  height: 600px;
  width: 100vw;
  left: 0vw;
  @media screen and (max-width: 1200px) {
    width: 1200px;
  }
  object-fit: cover;
`;

const Section3 = styled.img`
  background-color: ${theme.palette.Mint10};

  height: 600px;
  width: 100vw;
  left: 0vw;
  @media screen and (max-width: 1200px) {
    width: 1200px;
  }
  object-fit: cover;
`;

const TextWrapper = styled.div`
  position: absolute;
  z-index: 1;
`;
