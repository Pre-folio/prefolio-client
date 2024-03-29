import { palette } from './palette';
import { shadow } from './shadow';
import { typo } from './typo';

export interface TypeOfTheme {
    typo: TypeOfTypo;
    palette: TypeOfPalette;
    shadow: TypeOfShadow;
}

export const theme: TypeOfTheme = {
    typo,
    palette,
    shadow,
};

export type TypeOfPalette = typeof palette;
export type KeyOfPalette = keyof typeof palette;

export type KeyofTheme = keyof typeof theme;

export type TypeOfTypo = typeof typo;
export type KeyOfTypo = keyof typeof typo;

export type TypeOfShadow = typeof shadow;
export type KeyOfTShdow = keyof typeof shadow;

export const customMediaQuery = (minWidth: number): string => `@media (min-width: ${minWidth}px)`;
export const media = {
    custom: customMediaQuery,
    pc: customMediaQuery(768),
    mobile: `@media (max-width : 767px)`,
};
