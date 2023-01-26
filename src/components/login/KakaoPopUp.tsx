import styled from 'styled-components';
import { theme } from '../../styles/theme';

interface KakaoPopUpProps {
  children: React.ReactNode;
}

export const KakaoPopUp = ({ children }: KakaoPopUpProps) => {
  return (
    <PopUpContainer>
      <KaKaoPopUpWrapper>{children}</KaKaoPopUpWrapper>
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

  background-color: rgba(14, 14, 14, 0.5);
`;

const KaKaoPopUpWrapper = styled.div`
  z-index: 10000;

  background-color: ${theme.palette.White};
  color: ${theme.palette.Black};
  box-shadow: ${theme.shadow.Card.Black};

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 80px 102.5px 80px 102.5px;
  border-radius: 20px;

  width: 792px;
  height: 758px;
`;
