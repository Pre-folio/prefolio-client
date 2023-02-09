import { css } from 'styled-components';

export const calcRem = (px: number) => `${px / 16}rem`;

export const typo = {
  Heading1: css`
    font-family: 'Pretendard', 'Apple SD Gothic Neo';
    font-weight: 700;
    font-size: ${calcRem(40)};
    line-height: 150%;
  `,
  Heading2: css`
    font-family: 'Pretendard', 'Apple SD Gothic Neo';
    font-weight: 600;
    font-size: ${calcRem(32)};
    line-height: 162.5%;
  `,
  Heading3: css`
    font-family: 'Pretendard', 'Apple SD Gothic Neo';
    font-weight: 600;
    font-size: ${calcRem(24)};
    line-height: 183.3%;
  `,
  Heading4: css`
    font-family: 'Pretendard', 'Apple SD Gothic Neo';
    font-weight: 700;
    font-size: ${calcRem(22)};
    line-height: 136.5%;
  `,
  Heading5: css`
    font-family: 'Pretendard', 'Apple SD Gothic Neo';
    font-weight: 500;
    font-size: ${calcRem(22)};
    line-height: 172.72%;
  `,
  Body1: css`
    font-family: 'Pretendard', 'Apple SD Gothic Neo';
    font-weight: 500;
    font-size: ${calcRem(18)};
    line-height: 166.66%;
  `,
  Body2: css`
    font-family: 'Pretendard', 'Apple SD Gothic Neo';
    font-weight: 400;
    font-size: ${calcRem(16)};
    line-height: 162.5%;
  `,
  Label1: css`
    font-family: 'Pretendard', 'Apple SD Gothic Neo';
    font-weight: 600;
    font-size: ${calcRem(18)};
    line-height: 100%;
  `,
  Label2: css`
    font-family: 'Pretendard', 'Apple SD Gothic Neo';
    font-weight: 500;
    font-size: ${calcRem(16)};
    line-height: 100%;
  `,
  Gotham: css`
    font-family: 'Gotham';
    font-style: normal;
    font-weight: 500;
    font-size: ${calcRem(64)};
    line-height: 131.5%;

    letter-spacing: -0.05em;
    text-transform: capitalize;
  `,
  Landing: css`
    font-family: 'Pretendard', 'Apple SD Gothic Neo';
    font-weight: 600;
    font-size: ${calcRem(60)};
    line-height: 150%;
  `,
} as const;
