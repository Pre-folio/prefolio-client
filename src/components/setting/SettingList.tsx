import { PropaneSharp } from '@mui/icons-material';
import { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { useJoinForm } from '../../hooks/useJoinForm';
import { useToast } from '../../hooks/useToasts';
import { userState } from '../../store/Auth/userState';
import { toastTypeState } from '../../store/Toast/toastState';
import { Button } from '../common/Button';
import { Toast } from '../common/Toast';
import { Space, Text } from '../common/Wrapper';
import { Grade } from './Grade';
import { Nickname } from './Nickname';
import { Part } from './Part';
import { ProfileImage } from './ProfileImage';

export interface SettingListProps {
  isModify: boolean;
}

export const SettingList = (props: SettingListProps) => {
  const {
    register,
    handleSubmit,
    watch,
    control,
    errors,
    nicknameValidation,
    getValues,
    setValue,
    joinPrefolio,
    modifyProfile,
    trigger,
    setError,
  } = useJoinForm();

  const { openToast } = useToast();
  const [user, setUser] = useRecoilState(userState);
  const toastType = useRecoilValue(toastTypeState);

  useEffect(() => {
    if (props.isModify) {
      setValue('nickname', user.nickname);
      setValue('profileImage', user.profileImage);
      setValue('grade', user.grade);
      setValue('type', user.type);
      trigger();
    }
  }, []);

  // 새로고침 시 submit 이벤트 발생
  const onSubmit = (data: any) => {
    console.log(props.isModify);
    if (props.isModify) {
      modifyProfile.mutate(data);
    } else {
      joinPrefolio.mutate(data);
    }
  };

  const onError = (error: any) => {
    openToast(`프로필 사진 제외 모든 항목을 기입해 주세요`, 'error');
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)}>
      <Toast varient={toastType} />
      <Text typo={'Heading1'} color={'Black'} height={40}>
        내 정보 입력하기
      </Text>
      <Space height={106} />
      <Nickname
        register={register}
        errors={errors}
        setError={setError}
        nicknameValidation={nicknameValidation}
        trigger={trigger}
      />
      <Space height={80} />
      <ProfileImage
        register={register}
        errors={errors}
        control={control}
        watch={watch}
        setValue={setValue}
        isModify={props.isModify}
      />
      <Space height={80} />
      <Grade control={control} isModify={props.isModify} />
      <Space height={80} />
      <Part control={control} isModify={props.isModify} />
      <Space height={106} />
      <Button
        type={'big'}
        color={'mint'}
        content={props.isModify ? '저장하기' : '시작하기'}
        onClick={handleSubmit(onSubmit, onError)}
      />
    </Form>
  );
};

const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 588px;
  height: 100%;

  margin: 106px 0px 160px 0px;
`;
