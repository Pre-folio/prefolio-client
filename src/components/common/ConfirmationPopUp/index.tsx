import { MouseEventHandler } from 'react';
import styled from 'styled-components';
import { theme } from '../../../styles/theme';
import { Button } from '../Button';

export interface ConfirmationPopUpProps {
  handleCancelButtonClick?: MouseEventHandler<HTMLButtonElement>;
  handleUploadButtonClick?: MouseEventHandler<HTMLButtonElement>;
}

/**
 *
 * @param handleCancelButtonClick?: MouseEventHandler<HTMLButtonElement>
 * @param handleUploadButtonClick?: MouseEventHandler<HTMLButtonElement>
 */

export const ConfirmationPopUp = (props: ConfirmationPopUpProps) => {
  return (
    <PopUpContainer>
      <ConfirmationPopUpWrapper>
        <MockImage />
        <ConfirmText>업로드하시겠습니까?</ConfirmText>
        <CautionText>
          업로드 후 글 수정이 어려우니 한번 더 확인해주세요!
        </CautionText>
        <ButtonWrapper>
          <Button
            type={'popup'}
            color={'gray'}
            content={'취소'}
            onClick={props.handleCancelButtonClick}
          />
          <Button
            type={'popup'}
            color={'navy'}
            content={'업로드하기'}
            onClick={props.handleUploadButtonClick}
          />
        </ButtonWrapper>
      </ConfirmationPopUpWrapper>
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

const ConfirmationPopUpWrapper = styled.div`
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

const MockImage = styled.div`
  width: 587px;
  height: 368px;
  background-color: ${theme.palette.Gray20};
`;

const ConfirmText = styled.div`
  margin-top: 38px;
  height: 17px;

  ${theme.typo.Heading3}
`;

const CautionText = styled.div`
  margin-top: 30px;
  margin-bottom: 60px;

  height: 11px;

  ${theme.typo.Body1}
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 24px;
`;
