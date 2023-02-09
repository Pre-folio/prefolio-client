import { useRouter } from 'next/router';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { deletePost } from '../../apis/postContent';
import { isPostDeleteButtonClickedState } from '../../store/Popup/popupState';
import { palette } from '../../styles/theme';
import { ConfirmationPopUp } from '../common/ConfirmationPopUp';
import { ModifyIcon } from '../Icons/ModifyIcon';
import { TrashCanIcon } from '../Icons/TrashCanIcon';

interface FloatingButtonProps {
  postId: number;
}

export function FloatingButton({ postId }: FloatingButtonProps) {
  const router = useRouter();
  const [isPostDeleteButtonClicked, setIsPostDeleteButtonClicked] = useRecoilState(isPostDeleteButtonClickedState);

  const onClickModifyIcon = () => {
    alert('기능 준비중입니다.');
    return;
  };

  const onClickTrashCanIcon = () => {
    setIsPostDeleteButtonClicked(true);
  };

  return (
    <>
      <Wrapper>
        <ModifyIcon onClick={onClickModifyIcon} />
        <TrashCanIcon onClick={onClickTrashCanIcon} />
      </Wrapper>
      {isPostDeleteButtonClicked && (
        <ConfirmationPopUp
          type="delete"
          style={{ position: 'absolute', zIndex: 100 }}
          handleUploadButtonClick={() => {
            deletePost(postId);
            router.push('/feed');
          }}
          handleCancelButtonClick={() => {
            setIsPostDeleteButtonClicked(false);
          }}
        />
      )}
    </>
  );
}

const Wrapper = styled.div`
  width: 58px;
  height: 122px;
  padding: 20px 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  position: fixed;
  bottom: 10%;
  right: 100px;
  border-radius: 8px;
  background-color: ${palette.Gray10};
  z-index: 1000;
`;
