import Image from 'next/image';
import { Flex, Space, Text } from '../common/Wrapper';

export const NoPost = () => {
  return (
    <Flex direction='column'>
      <Image
        alt='megaphone'
        src={'/images/megaphone.png'}
        width={90}
        height={90}
      />
      <Space height={40} />
      <Text typo={'Heading3'} color={'Gray30'} height={34}>
        더 이상 볼 수 있는 게시글이 없어요!
      </Text>
      <Text typo={'Heading3'} color={'Gray30'} height={34}>
        더 많은 글을 작성해보세요 :)
      </Text>
    </Flex>
  );
};
