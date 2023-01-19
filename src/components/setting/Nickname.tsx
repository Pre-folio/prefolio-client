import styled from 'styled-components';
import { KeyOfPalette, KeyOfTypo, theme } from '../../styles/theme';
import { Input } from '../common/Input';

export const NickName = () => {
  const errorMessage = '*24byte를 초과하였습니다';

  return (
    <Wrapper>
      <Text typo={'Heading5'} color={'Black'} height={22}>
        닉네임을 입력하세요.
      </Text>
      <Space height={36} />
      <Input
        width={588}
        height={46}
        errorMessage={errorMessage}
        placeholder={'최대 24byte'}
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
