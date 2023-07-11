import styled from 'styled-components';
import { KeyOfPalette, KeyOfTypo, theme } from '../../styles/theme';

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
    width: 1200px;
    height: 100vh;

    padding-top: 74px;
    /* display: flex; */
    /* flex-direction: column; */
    /* justify-content: center; */
    /* align-items: center; */
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
    mobileHeight?: number;
}>`
    height: ${({ height }) => `${height}px`};

    @media (max-width: 1023px) {
        gap: ${({ mobileHeight }) => (mobileHeight ? `${mobileHeight}px` : '0px')};
    }
`;

export const Flex = styled.div<{
    direction?: string;
    justify?: string;
    align?: string;
    gap?: number;
    width?: number;
    height?: number;
}>`
    display: flex;
    flex-direction: ${({ direction }) => (direction ? `${direction}` : 'row')};
    justify-content: ${({ justify }) => (justify ? `${justify}` : 'center')};
    align-items: ${({ align }) => (align ? `${align}` : 'center')};
    gap: ${({ gap }) => (gap ? `${gap}px` : '0px')};

    width: ${({ width }) => (width ? `${width}px` : '100%')};
    height: ${({ height }) => (height ? `${height}px` : '100%')};
`;

export const Line = styled.div<{
    width?: number;
    height?: number;
}>`
    width: ${({ width }) => (width ? `${width}px` : '0px')};
    height: ${({ height }) => (height ? `${height}px` : '0px')};
    background-color: ${theme.palette.Gray15};
    border-radius: 25px;
`;
