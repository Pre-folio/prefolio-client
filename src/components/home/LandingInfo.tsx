import styled from 'styled-components';
import { KeyOfPalette, KeyOfTypo, theme } from '../../styles/theme';

interface LandingInfoProps {
  title1: string;
  title2: string;
  description1: string;
  description2: string;
  justify: string;
}

export const LandingInfo = (props: LandingInfoProps) => {
  return (
    <LandingInfoWrapper justify={props.justify}>
      <Space height={180} />
      <Text typo='Heading1' color='Black'>
        {props.title1}
        <br />
        {props.title2}
      </Text>
      <Space height={36} />
      <Text typo='Heading5' color='Black'>
        {props.description1}
        <br />
        {props.description2}
      </Text>
      <Space height={188.33} />
    </LandingInfoWrapper>
  );
};

const LandingInfoWrapper = styled.div<{
  justify: string;
}>`
  width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: ${({ justify }) => `${justify}`};
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
