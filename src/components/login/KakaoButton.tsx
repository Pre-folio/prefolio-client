import { useRouter } from 'next/router';
import { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';
import { KakaoIcon } from '../../assets/icons';
import { media, theme } from '../../styles/theme';
import { Text } from '../common/Wrapper';

export const KakaoButton = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
    return (
        <StyledButton {...props}>
            <KakaoIcon />
            <Text typo="Heading4" mobileTypo="Body1" color="Black">
                카카오 로그인/회원가입
            </Text>
        </StyledButton>
    );
};

const StyledButton = styled.button`
    border-radius: 12px;
    width: 276px;
    height: 54px;

    display: flex;
    align-items: center;
    background-color: #fee500;

    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 43px;
    padding: 0px 53px 0px 14px;

    ${media.mobile} {
        width: 100%;
        height: 53px;
        gap: 41px;
        padding: 0px 47px 0px 26px;
    }
`;
