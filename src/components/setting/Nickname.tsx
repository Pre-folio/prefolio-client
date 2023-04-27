import { CurtainsTwoTone } from '@mui/icons-material';
import { useEffect, useState } from 'react';
import {
  UseFormGetValues,
  UseFormRegister,
  UseFormSetError,
} from 'react-hook-form';
import styled from 'styled-components';
import authAPI from '../../apis/auth';
import { JoinFormValues, useJoinForm } from '../../hooks/useJoinForm';
import { KeyOfPalette, KeyOfTypo, theme } from '../../styles/theme';
import { Input } from '../common/Input';

export interface NicknameProps {
  register: UseFormRegister<JoinFormValues>;
  errors: any;
  setError: any;
  nicknameValidation: any;
  trigger: any;
}

/**
 * @param register
 * @param errors
 * @param nicknameValidation
 */

export const Nickname = ({
  errors,
  register,
  nicknameValidation,
  setError,
  trigger,
}: NicknameProps) => {
  const [message, setMessage] = useState<string>('*2글자 이상 입력해 주세요.');
  const [messageColor, setMessageColor] = useState<KeyOfPalette>('Red');

  useEffect(() => {
    trigger();
  }, []);

  return (
    <Wrapper>
      <Text typo={'Heading5'} color={'Black'} height={22}>
        닉네임을 입력하세요.
      </Text>
      <Space height={36} />
      <Input
        width={588}
        height={46}
        placeholder={'최대 12글자'}
        errorMessage={
          errors.nickname?.message
            ? errors.nickname?.message
            : '*사용 가능한 닉네임입니다.'
        }
        errorMessageColor={errors.nickname?.message ? 'Red' : 'Blue100'}
        {...register('nickname', {
          required: '*2글자 이상 입력해 주세요.',
          maxLength: {
            value: 12,
            message: '*12글자를 초과하였습니다.',
          },
          minLength: {
            value: 2,
            message: '*2글자 이상 입력해 주세요.',
          },
          validate: { nicknameValidation },
        })}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Text = styled.div<{
  typo: KeyOfTypo;
  color: KeyOfPalette;
  height: number;
}>`
  ${({ typo }) => theme.typo[typo]};
  color: ${({ color }) => theme.palette[color]};

  display: flex;
  align-items: center;

  height: ${({ height }) => `${height}px`};
`;

const Space = styled.div<{
  height: number;
}>`
  height: ${({ height }) => `${height}px`};
`;
