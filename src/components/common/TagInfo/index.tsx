import styled from 'styled-components';
import { TagInfoIcon } from '../../../assets/icons';
import { theme } from '../../../styles/theme';
import { Flex, Space, Text } from '../Wrapper';

interface TagInfoProps {
  className: string;
}

const TagInfo = (props: TagInfoProps) => {
  return (
    <Wrapper id={props.className} className={props.className}>
      <Flex gap={38}>
        <Img src='images/tagIcon.png' />
        <Flex direction='column' align='flex-start'>
          <Space height={16} />
          <Text typo={'Heading4'} color={'Navy'} height={22}>
            태그 설정 안내
          </Text>
          <Space height={24} />
          <Flex direction='column' align='flex-start' gap={5}>
            <Text typo={'Body2'} color={'Black'} height={22}>
              한 필터에서 두 개 이상의 태그를 설정 가능합니다.
            </Text>
            <Text typo={'Body2'} color={'Black'} height={22}>
              (ex. 분야별 - 기획, 디자인)
            </Text>
            <Text typo={'Body2'} color={'Black'} height={22}>
              해당하는 내용에 대한 태그만 설정해주세요!
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Wrapper>
  );
};

export default TagInfo;

const Wrapper = styled.div`
  width: 588px;
  height: 214px;

  background-image: url('https://s3.ap-northeast-2.amazonaws.com/prefolio.net-image/default/tagInfo.svg');
  padding: 48px 18px 18px 18px;
`;

const InfoWrapper = styled.div`
  background-color: ${theme.palette.Blue10};

  border-radius: 14px;
`;

const Img = styled.img`
  width: 148px;
  height: 148px;
  border-radius: 14px;
`;
