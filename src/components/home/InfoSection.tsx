import styled from 'styled-components';
import { KeyOfPalette, KeyOfTypo, theme } from '../../styles/theme';

interface InfoSectionProps {
  title1: string;
  title2: string;
  description1: string;
  description2: string;
  justify: string;
}

export const InfoSection = (props: InfoSectionProps) => {
  return (
    <InfoWrapper justify={props.justify}>
      <Space height={185} />
      <Text typo='Heading1' color='Black'>
        {props.title1}
      </Text>
      <Text typo='Heading1' color='Black'>
        {props.title2}
      </Text>
      <Space height={28.32} />
      <Text typo='Heading5' color='Black'>
        {props.description1}
      </Text>
      <Text typo='Heading5' color='Black'>
        {props.description2}
      </Text>
      <Space height={192} />
    </InfoWrapper>
  );
};

const InfoWrapper = styled.section<{
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
