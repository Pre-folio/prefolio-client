import styled from 'styled-components';
import { KeyOfPalette, KeyOfTypo, theme } from '../../styles/theme';
import { Button } from '../common/Button';

export const StartSection = () => {
  return (
    <section>
      <Space height={185} />
      <Text typo='Heading2' color='Black'>
        대학생이라면 이용해야 하는
        <br />
        IT 스펙 저장소,
      </Text>
      <Space height={12} />
      <Text typo='Gotham' color='Navy'>
        Prepare
        <br />
        Your Portfolio!
      </Text>
      <Space height={70} />
      <Button type='big' color='mint' content='바로 시작하기' />
      <Space height={174.33} />
    </section>
  );
};

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
