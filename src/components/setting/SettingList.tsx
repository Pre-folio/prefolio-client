import { useEffect } from 'react';
import styled from 'styled-components';
import { useJoinForm } from '../../hooks/useJoinForm';
import { Button } from '../common/Button';
import { Space, Text } from '../common/Wrapper';
import { Grade } from './Grade';
import { Nickname } from './Nickname';
import { Part } from './Part';
import { ProfileImage } from './ProfileImage';

export const SettingList = () => {
  const {
    register,
    handleSubmit,
    watch,
    control,
    errors,
    nicknameValidation,
    getValues,
    joinPrefolio,
  } = useJoinForm();

  const onSubmit = (data: any) => {
    joinPrefolio.mutate(data);
  };
  const onError = (error: any) => {
    alert(`프로필 사진 제외 모든 항목을 기입해 주세요`);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)}>
      <Text typo={'Heading1'} color={'Black'} height={40}>
        내 정보 입력하기
      </Text>
      <Space height={106} />
      <Nickname
        register={register}
        errors={errors}
        nicknameValidation={nicknameValidation}
      />
      <Space height={80} />
      <ProfileImage
        register={register}
        errors={errors}
        control={control}
        watch={watch}
      />
      <Space height={80} />
      <Grade control={control} />
      <Space height={80} />
      <Part control={control} />
      <Space height={106} />
      <Button
        type={'big'}
        color={'mint'}
        content={'시작하기'}
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
