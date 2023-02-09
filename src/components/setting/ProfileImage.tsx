import { toFormData } from 'axios';
import { ChangeEvent, useEffect, useState } from 'react';
import { UseFormRegister } from 'react-hook-form';

import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import sourceAPI from '../../apis/source';
import { getPresignedUrl, uploadFile } from '../../apis/uploadImage';
import { SearchIcon, TrashIcon, UploadIcon } from '../../assets/icons';
import { JoinFormValues, useJoinForm } from '../../hooks/useJoinForm';
import { usePresignedURL } from '../../hooks/usePresignedURL';
import { userState } from '../../store/Auth/userState';
import { theme } from '../../styles/theme';
import { onSelectFiles } from '../../utils/getBase64';
import { Flex, Space, Text } from '../common/Wrapper';

export interface ProfileImageProps {
  register: UseFormRegister<JoinFormValues>;
  errors: any;
  control: any;
  watch: any;
  setValue: any;
  isModify: boolean;
}

export const ProfileImage = ({
  register,
  errors,
  watch,
  setValue,
  ...props
}: ProfileImageProps) => {
  const [image, setImage] = useState<string>(
    'https://s3.ap-northeast-2.amazonaws.com/prefolio.net-image/default/default_profile.png'
  );
  const [trashIconColor, setTrashIconColor] = useState<string>(
    `${theme.palette.Gray20}`
  );

  const { url, setSource } = usePresignedURL();
  const [user, setUser] = useRecoilState(userState);
  const handleImageChange = async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const url = await getPresignedUrl({
        userId: user.userId,
        path: 'PROFILE',
      });
      const slicedUrl = url.slice(0, url.indexOf('?x-amz'));

      if (url) {
        const statusCode = await uploadFile({
          url: url,
          file: e.target.files[0],
        });
        if (statusCode === 200) {
          setImage(slicedUrl);
          setTrashIconColor(`${theme.palette.Gray40}`);
          setValue('profileImage', slicedUrl);
        }
      }
    }
  };

  useEffect(() => {
    if (props.isModify) {
      setValue('profileImage', user.profileImage);
      setImage(user.profileImage);
      setTrashIconColor(`${theme.palette.Gray40}`);
    } else {
      setValue(
        'profileImage',
        'https://s3.ap-northeast-2.amazonaws.com/prefolio.net-image/default/default_profile.png'
      );
    }
  }, []);

  const handleTrashIconClick = () => {
    setImage(
      'https://s3.ap-northeast-2.amazonaws.com/prefolio.net-image/default/default_profile.png'
    );
    setTrashIconColor(`${theme.palette.Gray20}`);
    setValue(
      'profileImage',
      'https://s3.ap-northeast-2.amazonaws.com/prefolio.net-image/default/default_profile.png'
    );
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
              {...(register('profileImage'), { onChange: handleImageChange })}
              type='file'
              id='profileImage'
              style={{ display: 'none' }}
              // onChange={handleImageChange}
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

const Image = styled.img`
  height: 180px;
  width: 180px;
  border-radius: 100%;
  background-color: #000;
`;
