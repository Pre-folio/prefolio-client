import styled from 'styled-components';

export interface IWrapper {
  width?: string;
  height?: string;
  justifyContent?: string;
  alignItems?: string;
  marginBottom?: string;
  marginTop?: string;
  gap?: string;
}

export const Section = styled.section`
  width: 100%;
  padding-top: 74px;
  justify-content: center;
  align-items: center;
`;

export const Row = styled.div<IWrapper>`
  width: ${(props) => props.width};
  /* height: ${(props) => props.height || '100%'}; */
  height: auto;
  display: flex;
  justify-content: ${(props) => props.justifyContent || 'center'};
  align-items: ${(props) => props.alignItems || 'center'};
  margin-bottom: ${(props) => props.marginBottom};
  margin-top: ${(props) => props.marginTop};
  gap: ${(props) => props.gap};
`;

export const Column = styled.div<IWrapper>`
  width: ${(props) => props.width};
  /* height: ${(props) => props.height || '100%'}; */
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => props.justifyContent || 'center'};
  align-items: ${(props) => props.alignItems || 'center'};
  margin-bottom: ${(props) => props.marginBottom};
  margin-top: ${(props) => props.marginTop};
  gap: ${(props) => props.gap};
`;
