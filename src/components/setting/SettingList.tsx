import styled from 'styled-components';
import { Space, Text } from '../common/Wrapper';
import { NickName } from './Nickname';
import { ProfileImage } from './ProfileImage';

export const SettingList = () => {
  return (
    <Wrapper>
      <Text typo={'Heading1'} color={'Black'} height={40}>
        내 정보 입력하기
      </Text>
      <Space height={106} />
      <NickName />
      <Space height={80} />
      <ProfileImage />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 100%;

  margin: 106px 0px 160px 0px;
`;
