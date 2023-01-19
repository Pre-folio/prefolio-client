import styled from 'styled-components';
import { KeyOfPalette, KeyOfTypo, theme } from '../../styles/theme';

export interface IWrapper {
  width?: string;
  justifyContent?: string;
  alignItems?: string;
  marginBottom?: string;
  marginTop?: string;
  gap?: string;
}

export const Section = styled.section`
  width: 1200px;
  height: 100vh;

  padding-top: 74px;
`;

export const Row = styled.div<IWrapper>`
  width: ${(props) => props.width};
  display: flex;
  height: 100%;
  justify-content: ${(props) => props.justifyContent || 'center'};
  align-items: ${(props) => props.alignItems || 'center'};
  margin-bottom: ${(props) => props.marginBottom};
  margin-top: ${(props) => props.marginTop};
  gap: ${(props) => props.gap};
`;

export const Column = styled.div<IWrapper>`
  width: ${(props) => props.width};
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: ${(props) => props.justifyContent || 'center'};
  align-items: ${(props) => props.alignItems || 'center'};
  margin-bottom: ${(props) => props.marginBottom};
  margin-top: ${(props) => props.marginTop};
  gap: ${(props) => props.gap};
`;

export const Text = styled.div<{
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

export const Space = styled.div<{
  height: number;
}>`
  height: ${({ height }) => `${height}px`};
`;
