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
        line-height: 130%;
    `,
    Heading3: css`
        font-family: 'Pretendard', 'Apple SD Gothic Neo';
        font-weight: 600;
        font-size: ${calcRem(20)};
        line-height: 100%;
    `,
    Heading3_1: css`
        font-family: 'Pretendard', 'Apple SD Gothic Neo';
        font-weight: 600;
        font-size: ${calcRem(20)};
        line-height: 140%;
    `,
    Heading4: css`
        font-family: 'Pretendard', 'Apple SD Gothic Neo';
        font-weight: 700;
        font-size: ${calcRem(16)};
        line-height: 100%;
        letter-spacing: ${calcRem(8)};
    `,
    Heading5: css`
        font-family: 'Pretendard', 'Apple SD Gothic Neo';
        font-weight: 500;
        font-size: ${calcRem(16)};
        line-height: 130%;
    `,
    HeadingMobile: css`
        font-family: 'Pretendard', 'Apple SD Gothic Neo';
        font-weight: 500;
        font-size: ${calcRem(22)};
        line-height: 100%;
    `,
    Body1: css`
        font-family: 'Pretendard', 'Apple SD Gothic Neo';
        font-weight: 500;
        font-size: ${calcRem(18)};
        line-height: 160%;
    `,
    Body2: css`
        font-family: 'Pretendard', 'Apple SD Gothic Neo';
        font-weight: 400;
        font-size: ${calcRem(14)};
        line-height: 160%;
    `,
    Body3: css`
        font-family: 'Pretendard', 'Apple SD Gothic Neo';
        font-weight: 400;
        font-size: ${calcRem(12)};
        line-height: 100%;
    `,
    Label1: css`
        font-family: 'Pretendard', 'Apple SD Gothic Neo';
        font-weight: 600;
        font-size: ${calcRem(14)};
        line-height: 100%;
    `,
    Label1_1: css`
        font-family: 'Pretendard', 'Apple SD Gothic Neo';
        font-weight: 700;
        font-size: ${calcRem(14)};
        line-height: 100%;
    `,
    Label2: css`
        font-family: 'Pretendard', 'Apple SD Gothic Neo';
        font-weight: 700;
        font-size: ${calcRem(12)};
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
