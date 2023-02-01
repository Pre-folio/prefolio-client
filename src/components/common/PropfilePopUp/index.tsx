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
}

/**
 *
 * @param handleCancelButtonClick?: MouseEventHandler<HTMLButtonElement>
 * @param handleModifyButtonClick?: MouseEventHandler<HTMLButtonElement>
 * @param handleLogoutButtonClick?: MouseEventHandler<HTMLButtonElement>
 */

export const ProfilePopUp = (props: ProfilePopUpProps) => {
  const [user, setUser] = useRecoilState(userState);
  return (
    <PopUpContainer>
      <PopUpWrapper>
        <Flex direction='column'>
          <MockImage src={user.profileImage} />
          <Space height={20} />
          <Text typo={'Heading4'} color={'Black'} height={22}>
            {user.nickname}
          </Text>
          <Space height={20} />
          <Tag
            type={'activity'}
            sort={'프로필 수정'}
            style={{ boxShadow: 'none' }}
          />
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
      <BackDrop />
    </PopUpContainer>
  );
};

const PopUpContainer = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const BackDrop = styled.div`
  z-index: 9999;

  width: 100vw;
  height: 100vh;

  position: fixed;
  top: 0;

  background-color: rgba(14, 14, 14, 0.8);
`;

const PopUpWrapper = styled.div`
  z-index: 10000;

  background-color: ${theme.palette.White};
  color: ${theme.palette.Black};
  box-shadow: ${theme.shadow.Card.Black};

  display: flex;
  justify-content: flex-end;

  top: 92px;
  border-radius: 14px;

  width: 174px;
  height: 300px;
`;

const MockImage = styled.img`
  width: 90px;
  height: 90px;
  background-color: ${theme.palette.Gray20};
  border-radius: 100%;
`;
