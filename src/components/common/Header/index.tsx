import { useRouter } from 'next/router';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { isLoggedInState } from '../../../store/LoggedIn/loggedInState';
import { theme } from '../../../styles/theme';
import { Row } from '../Wrapper';
import { Logo } from '../../Icons/Logo';
import { Button } from '../Button';
import { userState } from '../../../store/Auth/userState';
import { useAutoLogin } from '../../../hooks/useAutoLogin';
import { ProfilePopUp } from '../PropfilePopUp';
import { useState } from 'react';
import { Toast } from '../Toast';
import { toastTypeState } from '../../../store/Toast/toastState';

export function Header() {
  const router = useRouter();
  const currentUrl = router.asPath;
  const isLoggedIn = useRecoilValue(isLoggedInState);
  const user = useRecoilValue(userState);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toastType = useRecoilValue(toastTypeState);

  useAutoLogin();

  return (
    <>
      <HeaderWrapper>
        <Wrapper>
          <Logo />
          {currentUrl === '/login' ? (
            // 로그인 창 -> 로고만 뜸
            <></>
          ) : isLoggedIn ? (
            // 로그인 된 경우
            currentUrl.includes('/write') ? (
              <></>
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
              <>
                <Row gap='16px'>
                  <Button
                    type={'medium'}
                    color={'mint'}
                    content={'새 글 작성'}
                    onClick={() => {
                      router.push('/write');
                    }}
                  />
                  <button
                    onClick={() => {
                      router.push(`/profile/${user.userId}`);
                    }}
                    style={{ width: '46px', height: '46px', cursor: 'pointer' }}
                  >
                    <ProfileContainer>
                      <ProfileImageWrapper
                        onMouseOver={() => setIsOpen(true)}
                        onMouseMove={() => setIsOpen(true)}
                        alt='프로필 이미지'
                        src={
                          user.profileImage
                            ? user.profileImage
                            : 'https://s3.ap-northeast-2.amazonaws.com/prefolio.net-image/default/default_profile.png'
                        }
                      />
                    </ProfileContainer>
                  </button>
                </Row>
              </>
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
      {isOpen && <ProfilePopUp isOpen={isOpen} setIsOpen={setIsOpen} />}
      <Toast varient={toastType} />
    </>
  );
}

const HeaderWrapper = styled.div`
  left: 0vw;
  height: 74px;

  background-color: ${theme.palette.Navy};

  display: flex;
  justify-content: center;

  position: fixed;
  top: 0;
  z-index: 999;

  width: 100vw;
`;

const Wrapper = styled.div`
  width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ProfileContainer = styled.div`
  width: 46px;
  height: 46px;

  &:hover {
    cursor: pointer;
  }
`;

const ProfileImageWrapper = styled.img`
  width: 46px;
  height: 46px;
  border-radius: 50%;
  object-fit: cover;
`;
