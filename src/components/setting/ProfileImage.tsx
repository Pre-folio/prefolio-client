import { toFormData } from 'axios';
import { ChangeEvent, useEffect, useState } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { useQuery } from 'react-query';
import styled from 'styled-components';
import sourceAPI from '../../apis/source';
import { SearchIcon, TrashIcon, UploadIcon } from '../../assets/icons';
import { JoinFormValues, useJoinForm } from '../../hooks/useJoinForm';
import { usePresignedURL } from '../../hooks/usePresignedURL';
import { theme } from '../../styles/theme';
import { onSelectFiles } from '../../utils/getBase64';
import { Flex, Space, Text } from '../common/Wrapper';

export interface ProfileImageProps {
  register: UseFormRegister<JoinFormValues>;
  errors: any;
  control: any;
  watch: any;
}

export const ProfileImage = ({
  register,
  errors,
  watch,
  ...props
}: ProfileImageProps) => {
  const [image, setImage] = useState<string>('');
  const [trashIconColor, setTrashIconColor] = useState<string>(
    `${theme.palette.Gray20}`
  );

  const { setSource } = usePresignedURL();

  const imageUpaloader = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImage(URL.createObjectURL(e.target.files[0]));

      // uploadFormdataMutation.mutate('PROFILE');
      setTrashIconColor(`${theme.palette.Gray40}`);
    }
  };

  // 2번째 업로드부터는 안 됨
  const handleImageChange = async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      onSelectFiles(e);

      setImage(URL.createObjectURL(e.target.files[0]));
      // console.log(await onSelectFiles(e));
      // setSource(await onSelectFiles(e));
      // uploadFormdataMutation.mutate('PROFILE');
      setTrashIconColor(`${theme.palette.Gray40}`);
    }
  };

  const handleTrashIconClick = () => {
    setImage('');
    setTrashIconColor(`${theme.palette.Gray20}`);
  };

  return (
    <Flex direction='column' align='flex-start' gap={36}>
      <Text typo={'Heading5'} color={'Black'} height={22}>
        프로필 이미지를 설정하세요.
      </Text>
      <Flex direction='column' gap={30}>
        <Image alt='프로필 이미지' src={image} />
        <Flex gap={30}>
          <label>
            <input
              type='file'
              id='profileImage'
              style={{ display: 'none' }}
              // onChange={handleImageChange}
              accept='image/x-png, image/gif, image/jpeg'
              {...(register('profileImage'), { onChange: handleImageChange })}
            />
            <UploadIcon stroke={theme.palette.Gray40} />
          </label>
          <TrashIcon stroke={trashIconColor} onClick={handleTrashIconClick} />
        </Flex>
      </Flex>
    </Flex>
  );
};

const Image = styled.img`
  height: 180px;
  width: 180px;
  border-radius: 100%;
  background-color: #000;
`;
