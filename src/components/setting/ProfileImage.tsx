import { useState } from '@storybook/addons';
import { ChangeEvent } from 'react';
import styled from 'styled-components';
import { Input } from '../common/Input';
import { Space, Text } from '../common/Wrapper';

export const ProfileImage = () => {
  const errorMessage = '*24byte를 초과하였습니다';
  const [image, setImage] = useState<Blob | null>(defaultProfileImage.png);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      console.log(e.target.files[0]);
    }
  };

  return (
    <Wrapper>
      <Text typo={'Heading5'} color={'Black'} height={22}>
        프로필 이미지를 설정하세요.
      </Text>
      <Space height={36} />
      <Input
        type='file'
        id='profile-upload'
        onChange={handleImageChange}
        accept='image/x-png, image/gif, image/jpeg'
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
