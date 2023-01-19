import styled from 'styled-components';
import { Button } from '../common/Button';
import { Space, Text } from '../common/Wrapper';
import { Grade } from './Grade';
import { NickName } from './Nickname';
import { Part } from './Part';
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
      <Space height={80} />
      <Grade />
      <Space height={80} />
      <Part />
      <Space height={106} />
      <Button type={'big'} color={'mint'} content={'시작하기'} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 588px;
  height: 100%;

  margin: 106px 0px 160px 0px;
`;
