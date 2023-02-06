import Image from 'next/image';
import styled from 'styled-components';
import { Button } from '../components/common/Button';
import { Toast } from '../components/common/Toast';
import { Flex } from '../components/common/Wrapper';
import { BottomSection } from '../components/home/BottomSection';
import { InfoSection } from '../components/home/InfoSection';
import { StartSection } from '../components/home/StartSection';
import { KeyOfPalette, KeyOfTypo, theme } from '../styles/theme';
import { useRef } from 'react';
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
} from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function Home() {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: scrollRef });
  const y = useParallax(scrollYProgress, 300);

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        delay: 0.5,
      },
    },
  };

  return (
    <div ref={scrollRef}>
      <Wrapper>
        <TextWrapper>
          <motion.div
            variants={textVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.8 }}
          >
            <StartSection />
          </motion.div>

          <motion.div
            variants={textVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.8 }}
          >
            <InfoSection
              title1='분야별로 스펙 활동'
              title2='모아보기'
              description1='다양한 분야의 활동 뿐 아니라'
              description2='동아리, 공모전 등 분야별로 구경할 수 있어요.'
              justify='flex-start'
            />
          </motion.div>

          <motion.div
            variants={textVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.8 }}
          >
            <InfoSection
              title1='자유롭게'
              title2='스크랩 하기'
              description1='다양한 분야의 스펙활동 기록을'
              description2='자유롭게 스크랩하여 저장할 수 있어요.'
              justify='flex-end'
            />
          </motion.div>

          <motion.div
            variants={textVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.8 }}
          >
            <InfoSection
              title1='내 스펙활동'
              title2='아카이빙'
              description1='쉽고 빠르게 스펙활동을 기록하여'
              description2='편리하게 아카이빙 해보세요.'
              justify='flex-start'
            />
          </motion.div>

          <motion.div
            variants={textVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.8 }}
          >
            <BottomSection />
          </motion.div>
        </TextWrapper>
        {/* prop으로 배경색, 높이 받도록 수정 */}
      </Wrapper>
      <ImgWrapper>
        <Section1 src='/images/home/home1.png' alt='' />

        <motion.div
          variants={imageVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.8 }}
        >
          <Flex justify='space-between'>
            <Section2 src='/images/home/home2.png' alt='' />
          </Flex>
        </motion.div>

        <motion.div
          variants={imageVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.8 }}
        >
          <Section2 src='/images/home/home3.png' alt='' />
        </motion.div>

        <motion.div
          variants={imageVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.8 }}
        >
          <Section3 src='/images/home/home4.png' alt='' />
        </motion.div>

        <div style={{ backgroundColor: `${theme.palette.Navy}` }}>
          <motion.div
            variants={imageVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.8 }}
          >
            <Section1 src='/images/home/home5.png' alt='' />
          </motion.div>
        </div>
      </ImgWrapper>
    </div>
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
    margin-left: 0;
  }
`;

const Section1 = styled.img`
  height: 100vh;
  width: 100vw;

  @media screen and (max-width: 1200px) {
    margin-left: 0;
  }
  display: flex;
  object-fit: cover;
  background-color: ${theme.palette.Navy};
`;

const Section2 = styled.img`
  height: 100vh;
  width: 100vw;

  left: 0vw;
  @media screen and (max-width: 1200px) {
    margin-left: 0;
  }
  object-fit: cover;
`;

const Section3 = styled.img`
  background-color: ${theme.palette.Mint10};
  height: 100vh;
  width: 100vw;
  @media screen and (max-width: 1200px) {
    margin-left: 0;
  }
  object-fit: cover;
`;

const TextWrapper = styled.div`
  position: absolute;
  z-index: 1;
`;
