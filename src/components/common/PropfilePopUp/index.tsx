import { useRouter } from 'next/router';
import { MouseEventHandler } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { userState } from '../../../store/Auth/userState';
import { theme } from '../../../styles/theme';
import { Button } from '../Button';
import { Tag } from '../Tag';
import { Flex, Space, Text } from '../Wrapper';

export interface ProfilePopUpProps {
  handleCancelButtonClick?: MouseEventHandler<HTMLButtonElement>;
  handleModifyButtonClick?: MouseEventHandler<HTMLButtonElement>;
  handleLogoutButtonClick?: MouseEventHandler<HTMLButtonElement>;
  isOpen: any;
  setIsOpen: any;
}

/**
 *
 * @param handleCancelButtonClick?: MouseEventHandler<HTMLButtonElement>
 * @param handleModifyButtonClick?: MouseEventHandler<HTMLButtonElement>
 * @param handleLogoutButtonClick?: MouseEventHandler<HTMLButtonElement>
 */

export const ProfilePopUp = (props: ProfilePopUpProps) => {
  const [user, setUser] = useRecoilState(userState);
  const router = useRouter();
  return (
    <PopUpContainer>
      <Flex width={1200} height={392} justify='flex-end'>
        <PopUpWrapper
          onMouseOver={() => props.setIsOpen(true)}
          onMouseMove={() => props.setIsOpen(true)}
          onMouseLeave={() => props.setIsOpen(false)}
          style={{ cursor: 'pointer', top: '0px' }}
        >
          <Flex direction='column' style={{ cursor: 'default' }}>
            <MockImage src={user.profileImage} />
            <Space height={20} />
            <Text typo={'Heading4'} color={'Black'} height={22}>
              {user.nickname}
            </Text>
            <Space height={20} />
            <div
              onClick={() => {
                router.push(`/setting`);
              }}
            >
              <Tag
                type={'activity'}
                sort={'프로필 수정'}
                style={{ boxShadow: 'none', cursor: 'pointer' }}
              />
            </div>
            <Space height={16} />
            <Text
              typo={'Label2'}
              color={'Gray40'}
              height={22}
              style={{ textDecorationLine: 'underline' }}
            >
              로그아웃
            </Text>
          </Flex>
        </PopUpWrapper>
      </Flex>
      <BackDrop onClick={() => props.setIsOpen(false)} />
    </PopUpContainer>
  );
};

const PopUpContainer = styled.div`
  width: 100%;
  position: fixed;
  z-index: 9999;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 1200px) {
    margin-left: 0;
  }
`;

const BackDrop = styled.div`
  z-index: 10000;

  width: 100vw;
  height: 100vh;

  position: fixed;
  top: 0;

  background-color: rgba(14, 14, 14, 0.2);

  cursor: pointer;
`;

const PopUpWrapper = styled.div`
  z-index: 10001;

  background-color: ${theme.palette.White};
  color: ${theme.palette.Black};
  box-shadow: ${theme.shadow.Card.Black};

  display: flex;

  border-radius: 14px;
  margin-top: 92px;

  cursor: pointer;

  width: 174px;
  height: 300px;
`;

const MockImage = styled.img`
  width: 90px;
  height: 90px;
  background-color: ${theme.palette.Gray20};
  border-radius: 100%;

  cursor: pointer;
`;