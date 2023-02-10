import { MouseEventHandler } from 'react';
import styled, { CSSProperties } from 'styled-components';
import { theme } from '../../../styles/theme';
import { Button } from '../Button';

export interface ConfirmationPopUpProps {
  handleCancelButtonClick?: MouseEventHandler<HTMLButtonElement>;
  handleUploadButtonClick?: MouseEventHandler<HTMLButtonElement>;
  style?: CSSProperties;
  type?: string;
}

/**
 *
 * @param handleCancelButtonClick?: MouseEventHandler<HTMLButtonElement>
 * @param handleUploadButtonClick?: MouseEventHandler<HTMLButtonElement>
 */

export const ConfirmationPopUp = (props: ConfirmationPopUpProps) => {
  return (
    <PopUpContainer style={props.style}>
      <ConfirmationPopUpWrapper>
        <ConfirmText>
          {props.type === 'delete'
            ? '게시물을 삭제하시겠습니까?'
            : '업로드하시겠습니까?'}
        </ConfirmText>
        <Img src='/images/popup.png' alt='' />
        <CautionText>
          {props.type === 'delete'
            ? '삭제한 게시물은 되돌리기 어려우니한번 더 확인해주세요!'
            : '업로드 후 글 수정이 어려우니 한번 더 확인해주세요!'}
        </CautionText>
        <ButtonWrapper>
          <Button
            type={'popup'}
            color={'gray'}
            content={props.type === 'delete' ? '취소하기' : '취소'}
            onClick={props.handleCancelButtonClick}
          />
          <Button
            type={'popup'}
            color={'navy'}
            content={props.type === 'delete' ? '삭제하기' : '업로드하기'}
            onClick={props.handleUploadButtonClick}
          />
        </ButtonWrapper>
      </ConfirmationPopUpWrapper>
      <BackDrop />
    </PopUpContainer>
  );
};

const PopUpContainer = styled.div`
  /* width: 100vw;
  position: absolute;
  left: 0;
  top: 20%; */
  /* position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100vw; */
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  overflow: hidden;

  position: absolute;
`;

const BackDrop = styled.div`
  z-index: 15000;

  width: 100vw;
  height: 100vh;

  position: fixed;

  top: 0;
  left: 0;

  background-color: rgba(14, 14, 14, 0.5);
  overflow: hidden;
`;

const ConfirmationPopUpWrapper = styled.div`
  z-index: 16000;

  background-color: ${theme.palette.White};
  color: ${theme.palette.Black};
  box-shadow: ${theme.shadow.Card.Black};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 80px 102.5px 80px 102.5px;
  border-radius: 20px;

  width: 792px;
  height: 758px;
`;

const Img = styled.img`
  width: 587px;
  height: 368px;
  background-color: transparent;
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
