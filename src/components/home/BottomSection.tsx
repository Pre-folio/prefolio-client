import styled from 'styled-components';
import { KeyOfPalette, KeyOfTypo, theme } from '../../styles/theme';
import { Button } from '../common/Button';

export const BottomSection = () => {
  return (
    <section>
      <Space height={244} />
      <TextFlex>
        <Text typo='Landing' color='White'>
          친구의 스펙 구경하고
        </Text>
        <Text typo='Landing' color='White'>
          나의 활동도 기록하세요!
        </Text>
        <Space height={56} />
        <Button type='big' color='mint' content='바로 시작하기' />
      </TextFlex>
      <Space height={229} />
    </section>
  );
};

const TextFlex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Text = styled.div<{
  typo: KeyOfTypo;
  color: KeyOfPalette;
}>`
  ${({ typo, theme }) => theme.typo[typo]};
  color: ${({ color }) => theme.palette[color]};
`;

const Space = styled.div<{
  height: number;
}>`
  height: ${({ height }) => `${height}px`};
`;
