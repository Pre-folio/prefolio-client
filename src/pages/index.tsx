import Image from 'next/image';
import styled from 'styled-components';
import { Button } from '../components/common/Button';
import { Toast } from '../components/common/Toast';
import { Flex } from '../components/common/Wrapper';
import { BottomSection } from '../components/home/BottomSection';
import { InfoSection } from '../components/home/InfoSection';
import { StartSection } from '../components/home/StartSection';
import { KeyOfPalette, KeyOfTypo, theme } from '../styles/theme';
import { useEffect, useRef } from 'react';
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

  useEffect(() => {
    console.log(`
----------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------
----------------------------------------------------------~~~---------------------------~~~---------
---:@@@@@@@@=~-$@@@@@@@#!--@@@@@@@@@~------!@@@@@@@@;---*#@@@@$!---~@@@#-----$@@@~---!#@@@@#*-------
---:@@@@@@@@@@-$@@@@@@@@@*-@@@@@@@@@~------!@@@@@@@@;-~#@@@@@@@@#--~@@@#-----#@@@~-~@@@@@@@@@#------
---:@@@@@@@@@@!$@@@@@@@@@@~@@@@@@@@@~-*$=--!@@@@@@@@;~#@@@@@@@@@@$-~@@@#-----#@@@~-$@@@@@@@@@@$~----
---:@@@=--=@@@=$@@@!;*@@@@;@@@@------~@@@*-!@@@*~~~~-*@@@@###@@@@@!~@@@#-----#@@@~*@@@@@##@@@@@!----
---:@@@=--:@@@$$@@@~--*@@@!@@@@------~@@@=-!@@@!----~@@@@=---~=@@@@~@@@#-----#@@@:@@@@=~---=@@@@----
---:@@@=--:@@@$$@@@~--=@@@!@@@@@@@@:--=@#~-!@@@@###=;@@@#------@@@@;@@@#-----#@@@*@@@#------@@@@:---
---:@@@#==#@@@=$@@@$=$@@@@;@@@@@@@@;---~---!@@@@@@@#*@@@*------=@@@*@@@#-----#@@@=@@@=------=@@@!---
---:@@@@@@@@@@;$@@@@@@@@@@-@@@@@@@@;--~:~--!@@@@@@@#*@@@*------=@@@!@@@#-----#@@@*@@@=------=@@@;---
---:@@@@@@@@@=-$@@@@@@@@@~-@@@@::::---$@@:-!@@@=!!!;;@@@@-----~@@@@;@@@#-----#@@@!@@@@-----~@@@@:---
---:@@@#$$==!--$@@@@@@@@@~-@@@@------~@@@=-!@@@!-----@@@@$:--:#@@@#~@@@#-----#@@@:@@@@#:--:$@@@#----
---:@@@=-------$@@@:;@@@@#-@@@@$$$$$--@@@!-!@@@!-----!@@@@@##@@@@@:~@@@@====~#@@@~;@@@@@##@@@@@;----
---:@@@=-------$@@@~-:@@@@:@@@@@@@@@~-;=!--!@@@!------$@@@@@@@@@@=-~@@@@@@@@;#@@@~-=@@@@@@@@@@=-----
---:@@@=-------$@@@~--$@@@!@@@@@@@@@~------!@@@!-------=@@@@@@@@=--~@@@@@@@@;#@@@~--=@@@@@@@@=------
---~===!-------=###~--*###;=========-------;$$$;--------;=@@@#=;----*=======:*===~---;=#@@#=;-------
----------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------
`);
    document.body.style.backgroundColor = `${theme.palette.Navy}`;
    return () => {
      document.body.style.backgroundColor = 'transparent';
    };
  }, []);

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
              title1='???????????? ?????? ??????'
              title2='????????????'
              description1='IT ?????? ????????? ?????? ??? ?????????'
              description2='?????????, ?????? ?????? ????????? ???????????? ????????? ??? ?????????.'
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
              title1='????????????'
              title2='????????? ??????'
              description1='????????? ????????? ???????????? ?????????'
              description2='???????????? ??????????????? ????????? ??? ?????????.'
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
              title1='??? ????????????'
              title2='????????????'
              description1='?????? ????????? ??????????????? ????????????'
              description2='???????????? ???????????? ????????????.'
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
        {/* prop?????? ?????????, ?????? ????????? ?????? */}
      </Wrapper>
      <ImgWrapper>
        <Section1 src='/images/home/home1.png' alt='' />

        <SectionWrapper color={'White'}>
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
        </SectionWrapper>

        <SectionWrapper color={'White'}>
          <motion.div
            variants={imageVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.8 }}
          >
            <Section2 src='/images/home/home3.png' alt='' />
          </motion.div>
        </SectionWrapper>

        <SectionWrapper color={'Mint10'}>
          <motion.div
            variants={imageVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.8 }}
          >
            <Section3 src='/images/home/home4.png' alt='' />
          </motion.div>
        </SectionWrapper>

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
    width: 1200px;
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
    width: 1200px;
  }
  object-fit: cover;
`;

const Section3 = styled.img`
  height: 100vh;
  width: 100vw;

  @media screen and (max-width: 1200px) {
    margin-left: 0;
    width: 1200px;
  }
  object-fit: cover;
`;

const SectionWrapper = styled.div<{ color: KeyOfPalette }>`
  background-color: ${({ color }) => theme.palette[color]};
  height: 100vh;
  width: 100vw;
  @media screen and (max-width: 1200px) {
    margin-left: 0;
    width: 1200px;
  }
  object-fit: cover;
`;

const TextWrapper = styled.div`
  position: absolute;
  z-index: 1;
`;
