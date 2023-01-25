import { useRouter } from 'next/router';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation, useQuery } from 'react-query';
import authAPI from '../apis/auth';
import sourceAPI from '../apis/source';
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

    formState: { errors },
  } = useForm<JoinFormValues>({
    mode: 'onChange',
    defaultValues: {
      nickname: '',
    },
  });
  const { kakaoJoinMutation } = useAuth();

  const { data } = useQuery('presignedURL', () =>
    sourceAPI.PRESIGNED_URL('PROFILE')
  );
  const [profile, setProfile] = useState<string>('');

  const router = useRouter();

  // 닉네임 validation check
  const nicknameValidation = async (value: string) => {
    const isUsed: boolean = await authAPI.CHECK_NICKNAME(watch('nickname'));
    if (isUsed === true) {
      console.log('중복');
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
      await console.log('error...', 'error');
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
  };
};
