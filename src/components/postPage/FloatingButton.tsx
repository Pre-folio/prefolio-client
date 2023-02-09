import { useRouter } from 'next/router';
import { useState } from 'react';
import styled from 'styled-components';
import { deletePost } from '../../apis/postContent';
import { palette } from '../../styles/theme';
import { getCookie } from '../../utils/cookie';
import { ConfirmationPopUp } from '../common/ConfirmationPopUp';
import { ModifyIcon } from '../Icons/ModifyIcon';
import { TrashCanIcon } from '../Icons/TrashCanIcon';

interface FloatingButtonProps {
  postId: number;
}

export function FloatingButton({ postId }: FloatingButtonProps) {
  const router = useRouter();
  const [isTrashCanIconClicked, setIsTrashCanIconClicked] = useState(false);

  const onClickModifyIcon = () => {
    alert('기능 준비중입니다.');
    return;
  };

  const onClickTrashCanIcon = () => {
    setIsTrashCanIconClicked(true);
  };

  return (
    <>
      <Wrapper>
        <ModifyIcon onClick={onClickModifyIcon} />
        <TrashCanIcon onClick={onClickTrashCanIcon} />
      </Wrapper>
      {isTrashCanIconClicked && (
        <ConfirmationPopUp
          type='delete'
          handleUploadButtonClick={() => {
            deletePost(getCookie(), postId);
            router.push('/feed');
          }}
          handleCancelButtonClick={() => {
            setIsTrashCanIconClicked(false);
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
  /* position: fixed;
  bottom: 10%;
  right: 100px; */
  border-radius: 8px;
  background-color: ${palette.Gray10};
`;
