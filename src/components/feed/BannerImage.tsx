import styled from 'styled-components';
import { Flex, Space, Text } from '../common/Wrapper';

export interface BannerImageProps {
  src: string;
  title: string;
  description1: string;
  description2: string;
}

export const BannerImage = (props: BannerImageProps) => {
  return (
    <Img src={props.src}>
      <Flex width={996} align='flex-start' justify='center' direction='column'>
        <Text typo='Heading1' color='Black' height={40}>
          {props.title}
        </Text>
        <Space height={42} />
        <Text typo='Body1' color='Black' height={18}>
          {props.description1}
        </Text>
        <Space height={18} />
        <Text typo='Body1' color='Black' height={18}>
          {props.description2}
        </Text>
      </Flex>
    </Img>
  );
};

const Img = styled.div<{ src: string }>`
  background-image: url(${({ src }) => `${src}`});

  width: 100vw;
  height: 444px;
  margin-left: calc(-50vw + 50%);

  display: flex;
  justify-content: center;

  @media screen and (max-width: 1200px) {
    width: 1200px;
    margin: 0;
  }
  object-fit: cover;
`;
