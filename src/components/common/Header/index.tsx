import { useRouter } from 'next/router';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { isLoggedInState } from '../../../store/LoggedIn/loggedInState';
import { theme } from '../../../styles/theme';
import { Row } from '../Wrapper';
import { Logo } from '../../Icons/Logo';
import { Button } from '../Button';

export function Header() {
  const router = useRouter();
  const currentUrl = router.asPath;
  const isLoggedIn = useRecoilValue(isLoggedInState);
  console.log(currentUrl);

  return (
    <HeaderWrapper>
      <Wrapper>
        <Logo />
        {currentUrl === '/login' ? (
          // 로그인 창 -> 로고만 뜸
          <></>
        ) : isLoggedIn ? (
          // 로그인 된 경우
          currentUrl === '/write' ? (
            <Button
              type={'medium'}
              color={'mint'}
              content={'업로드하기'}
              onClick={() => {
                router.push('/login');
              }}
            />
          ) : currentUrl.includes('/profile') ? (
            <Button
              type={'medium'}
              color={'mint'}
              content={'새 글 작성'}
              onClick={() => {
                router.push('/write');
              }}
            />
          ) : (
            <Row gap='16px'>
              <Button
                type={'medium'}
                color={'mint'}
                content={'새 글 작성'}
                onClick={() => {
                  router.push('/write');
                }}
              />
              <ProfileImageWrapper alt='프로필 이미지' src='' />
            </Row>
          )
        ) : (
          // 로그인 안 됐을 경우
          <Button
            type={'medium'}
            color={'mint'}
            content={'로그인/회원가입'}
            onClick={() => {
              router.push('/login');
            }}
          />
        )}
      </Wrapper>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.div`
  width: 100vw;
  height: 74px;
  margin-left: calc(-50vw + 50%);

  background-color: ${theme.palette.Navy};

  display: flex;
  justify-content: center;

  position: fixed;
  top: 0;
  z-index: 999;
`;

const Wrapper = styled.div`
  width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ProfileImageWrapper = styled.img`
  width: 46px;
  height: 46px;
  border-radius: 50%;
  border: 1px solid white; // 초기 구분을 위해
  object-fit: cover;
`;
