import { useRouter } from 'next/router';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { deletePost } from '../../apis/postContent';
import { useToast } from '../../hooks/useToasts';
import { isPostDeleteButtonClickedState } from '../../store/Popup/popupState';
import { palette } from '../../styles/theme';
import { getCookie } from '../../utils/cookie';
import { ConfirmationPopUp } from '../common/ConfirmationPopUp';
import { Toast } from '../common/Toast';
import { ModifyIcon } from '../Icons/ModifyIcon';
import { TrashCanIcon } from '../Icons/TrashCanIcon';

interface FloatingButtonProps {
  postId: number;
}

export function FloatingButton({ postId }: FloatingButtonProps) {
  const router = useRouter();
  const [isTrashCanIconClicked, setIsTrashCanIconClicked] = useState(false);
  const { openToast } = useToast();
  const [isPostDeleteButtonClicked, setIsPostDeleteButtonClicked] =
    useRecoilState(isPostDeleteButtonClickedState);

  const onClickModifyIcon = () => {
    openToast('기능 준비중입니다.', 'error');
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
      <Toast varient={'error'} />
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
