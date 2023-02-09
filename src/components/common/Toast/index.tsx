import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { toastContentState, toastState } from '../../../store/Toast/toastState';
import { theme } from '../../../styles/theme';
import { Text } from '../Wrapper';

export interface ToastProps {
  varient: ToastVarient;
  //   content: string;
  onClick?: () => void;
}

export type ToastVarient = 'success' | 'error';

const TOAST_SRC = {
  wrapper: {
    success: `${theme.palette.Mint10}`,
    error: `${theme.palette.Red10}`,
  },
  icon: {
    success: '/images/megaphone.png',
    error: '/images/common/redMegaphone.png',
  },
  text: {
    success: `${theme.palette.Minttext}`,
    error: `${theme.palette.Red80}`,
  },
};

/**
 * @param type: 'success' | 'error'
 * @param content: 들어갈 내용
 * @param onClick?: () => void;
 */

export const Toast = ({ varient = 'error', onClick }: ToastProps) => {
  const [open, setOpen] = useRecoilState(toastState);
  const [content, setContent] = useRecoilState(toastContentState);
  return (
    <ToastContainer isOpen={open}>
      <Wrapper varient={varient}>
        <Image src={TOAST_SRC.icon[varient]} alt="megaphone" width={48} height={48} />
        <Text typo="Heading5" color="Red80" height={22}>
          {content}
        </Text>
      </Wrapper>
    </ToastContainer>
  );
};

const ToastContainer = styled.div<{
  isOpen: boolean;
}>`
  width: 1200px;

  display: flex;
  justify-content: center;

  top: 60px;
  z-index: 10000;
  position: fixed;

  display: ${({ isOpen }) => (isOpen ? 'visible' : 'none')};
`;

const Wrapper = styled.div<{
  varient: ToastVarient;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 16px 38px;

  z-index: 10001;
  width: fit-content;

  background-color: ${({ varient }) => TOAST_SRC.wrapper[varient]};
  box-shadow: ${theme.shadow.Card.Black};
  border-radius: 14px;

  transition: all 500ms ease-in-out;
`;

const Image = styled.img`
  width: 48px;
  height: 48px;
`;
