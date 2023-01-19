import { ChangeEvent, useEffect, useState } from 'react';
import styled from 'styled-components';
import { SearchIcon, TrashIcon, UploadIcon } from '../../assets/icons';
import { theme } from '../../styles/theme';
import { Flex, Space, Text } from '../common/Wrapper';

export const ProfileImage = () => {
  const errorMessage = '*24byte를 초과하였습니다';
  const [image, setImage] = useState<Blob | null>();
  const [trashIconColor, setTrashIconColor] = useState<string>(
    `${theme.palette.Gray20}`
  );

  // 2번째 업로드부터는 안 됨
  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImage(e.target.files[0]);
      console.log(e.target.files);
      setTrashIconColor(`${theme.palette.Gray40}`);
    }
  };

  const handleTrashIconClick = () => {
    setImage(null);
    setTrashIconColor(`${theme.palette.Gray20}`);
  };

  return (
    <Flex direction='column' align='flex-start' gap={36}>
      <Text typo={'Heading5'} color={'Black'} height={22}>
        프로필 이미지를 설정하세요.
      </Text>
      <Flex direction='column' gap={30}>
        <MockImage />
        <Flex gap={30}>
          <label>
            <input
              type='file'
              id='profile-upload'
              style={{ display: 'none' }}
              onChange={handleImageChange}
              accept='image/x-png, image/gif, image/jpeg'
            />
            <UploadIcon stroke={theme.palette.Gray40} />
          </label>
          <TrashIcon stroke={trashIconColor} onClick={handleTrashIconClick} />
        </Flex>
      </Flex>
    </Flex>
  );
};

const MockImage = styled.div`
  height: 180px;
  width: 180px;
  border-radius: 100%;
  background-color: #000;
`;
