import styled from 'styled-components';

export interface IWrapper {
  justifyContent?: string;
  alignItems?: string;
  marginBottom?: string;
  marginTop?: string;
  gap?: string;
}

export const Section = styled.section`
  width: 100%;
  padding-top: 100px;
`;

export const Row = styled.div<IWrapper>`
  display: flex;
  height: 100%;
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  margin-bottom: ${(props) => props.marginBottom};
  margin-top: ${(props) => props.marginTop};
  gap: ${(props) => props.gap};
`;

export const Column = styled.div<IWrapper>`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  margin-bottom: ${(props) => props.marginBottom};
  margin-top: ${(props) => props.marginTop};
  gap: ${(props) => props.gap};
`;
