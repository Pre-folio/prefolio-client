import { useMutation, useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { useRecoilState } from 'recoil';
import authAPI from '../apis/auth';
import sourceAPI from '../apis/source';
import { userState } from '../store/Auth/userState';
import { getCookie } from '../utils/cookie';
import { useAuth } from './useAuth';

export interface JoinFormValues {
  nickname: string;
  profileImage: string;
  grade: number;
  type: string;
}

export const useJoinForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    setError,
    getValues,
    setValue,
    control,
    trigger,
    formState: { errors },
  } = useForm<JoinFormValues>({
    mode: 'onChange',
    defaultValues: {
      nickname: '',
      profileImage:
        'https://s3.ap-northeast-2.amazonaws.com/prefolio.net/profile/156116406a-2730-4365-8ce4-68d627952462?',
    },
  });
  const { kakaoJoinMutation, modifyProfileMutation } = useAuth();
  const [user, setUser] = useRecoilState(userState);

  const { data } = useQuery(['presignedURL'], () =>
    sourceAPI.PRESIGNED_URL('PROFILE', user.userId)
  );
  const [profile, setProfile] = useState<string>('');

  const router = useRouter();

  // 닉네임 validation check
  const nicknameValidation = async (value: string) => {
    const isUsed: boolean = await authAPI.CHECK_NICKNAME(
      getCookie(),
      watch('nickname'),
      user.userId
    );
    if (isUsed === true) {
      return '*중복된 닉네임입니다.';
    }
    return true;
  };

  // 프로필 이미지 업로드
  const setProfileImage = async (file: File) => {
    const presignedURL = await data;
    if (presignedURL) {
      profileImageUpload.mutate({ file, presignedURL });
    }
  };

  const profileImageUpload = useMutation(sourceAPI.UPLOAD_S3, {
    onSuccess: (url: string) => {
      setProfile(url);
    },
  });

  const joinPrefolio = useMutation(async () => {
    try {
      kakaoJoinMutation.mutate(getValues());
    } catch (error: unknown) {
      await console.log('error...', error);
    }
  });

  const modifyProfile = useMutation(async () => {
    try {
      modifyProfileMutation.mutate(getValues());
    } catch (error: unknown) {
      await console.log('error...', error);
    }
  });

  return {
    register,
    handleSubmit,
    watch,
    setError,
    getValues,
    setValue,
    control,
    errors,
    nicknameValidation,
    profileImageUpload,
    joinPrefolio,
    modifyProfile,
    trigger,
  };
};
