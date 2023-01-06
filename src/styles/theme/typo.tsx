import { css } from 'styled-components';

export const calcRem = (px: number) => `${px / 16}rem`;

export const typo = {
  Heading1: css`
    font-family: 'Pretendard';
    font-weight: 700;
    font-size: ${calcRem(40)};
    line-height: ${calcRem(20)};
  `,
  Heading2: css`
    font-family: 'Pretendard';
    font-weight: 600;
    font-size: ${calcRem(32)};
    line-height: ${calcRem(20)};
  `,
  Heading3: css`
    font-family: 'Pretendard';
    font-weight: 600;
    font-size: ${calcRem(24)};
    line-height: ${calcRem(20)};
  `,
  Heading4: css`
    font-family: 'Pretendard';
    font-weight: 700;
    font-size: ${calcRem(22)};
    line-height: ${calcRem(8)};
  `,
  Heading5: css`
    font-family: 'Pretendard';
    font-weight: 500;
    font-size: ${calcRem(22)};
    line-height: ${calcRem(16)};
  `,
  Body1: css`
    font-family: 'Pretendard';
    font-weight: 500;
    font-size: ${calcRem(18)};
    line-height: ${calcRem(12)};
  `,
  Body2: css`
    font-family: 'Pretendard';
    font-weight: 400;
    font-size: ${calcRem(16)};
    line-height: ${calcRem(10)};
  `,
  Label1: css`
    font-family: 'Pretendard';
    font-weight: 600;
    font-size: ${calcRem(18)};
    line-height: ${calcRem(0)};
  `,
  Label2: css`
    font-family: 'Pretendard';
    font-weight: 500;
    font-size: ${calcRem(16)};
    line-height: ${calcRem(0)};
  `,
} as const;
