import { useRouter } from 'next/router';
import { useState } from 'react';
import styled from 'styled-components';
import { deletePost } from '../../apis/postContent';
import { ConfirmationPopUp } from '../common/ConfirmationPopUp';
import { ModifyIcon } from '../Icons/ModifyIcon';
import { TrashCanIcon } from '../Icons/TrashCanIcon';

interface FloatingButtonProps {
  postId: number;
}

export function FloatingButton({ postId }: FloatingButtonProps) {
  const router = useRouter();
  const [isTrashCanIconClicked, setIsTrashCanIconClicked] = useState(false);

  const onClickTrashCanIcon = () => {
    setIsTrashCanIconClicked(true);
    // deletePost(postId);
    // router.push('/feed');
  };

  return (
    <>
      <Wrapper>
        <ModifyIcon />
        <TrashCanIcon onClick={onClickTrashCanIcon} />
      </Wrapper>
      {isTrashCanIconClicked && (
        <ConfirmationPopUp
          type="delete"
          handleUploadButtonClick={() => {
            deletePost(postId);
            router.push('/feed');
          }}
          handleCancelButtonClick={() => {
            setIsTrashCanIconClicked(!isTrashCanIconClicked);
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
  gap: 30px;
  position: fixed;
  right: 100px;
`;
