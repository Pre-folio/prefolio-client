import styled from 'styled-components';
import { KeyOfPalette, KeyOfTypo, media, theme } from '../../styles/theme';
import { Space, Text, Flex } from '../common/Wrapper';
import { KakaoButton } from './KakaoButton';

const LoginPage = () => {
    return (
        <Flex direction="column" justify="center">
            <Space height={125} mobileHeight={110} />
            <Text typo={'Body1'} mobileTypo={'Body2'} color={'Black'} height={18}>
                친구들의 스펙 활동 구경하고 싶으세요?
            </Text>
            <Space height={36} mobileHeight={23} />
            <Text typo={'Heading1'} mobileTypo="Heading3_1" color={'Black'} height={40}>
                소셜 계정으로
            </Text>
            <Space height={20} mobileHeight={8} />
            <Text typo={'Heading1'} mobileTypo="Heading3_1" color={'Black'} height={40}>
                프리폴리오 이용하기
            </Text>
            <Space height={60} mobileHeight={23} />
            <Img src="https://s3.ap-northeast-2.amazonaws.com/prefolio.net-image/default/login.png" alt="" />
            <Space height={100} mobileHeight={170} />
            <a href={`${process.env.NEXT_PUBLIC_KAKAO_OAUTH_URL}`} rel={'noopener noreferrer'}>
                <KakaoButton />
            </a>
            <Space height={65} />
            <a href="https://kauth.kakao.com/oauth/authorize?client_id=448df92a872863d23fb53063e2ea6e12&redirect_uri=http://localhost:3000/oauth/callback/kakao&response_type=code">
                카카오 로그인
            </a>
        </Flex>
    );
};

export default LoginPage;

const Img = styled.img`
    background-color: transparent;

    height: 321px;
    width: 588px;

    ${media.mobile} {
        height: auto;
        width: 100%;
    }
`;
