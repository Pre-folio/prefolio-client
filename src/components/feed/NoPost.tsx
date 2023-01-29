import { ReactNode } from 'react';
import styled from 'styled-components';
import { Flex, Space, Text } from '../common/Wrapper';

interface NoPostProps {
  text: ReactNode;
}
export const NoPost = (props: NoPostProps) => {
  return (
    <Flex direction='column'>
      <Image
        alt='megaphone'
        src={'/images/megaphone.png'}
        width={90}
        height={90}
      />
      <Space height={40} />
      {props.text}
    </Flex>
  );
};

const Image = styled.img``;
