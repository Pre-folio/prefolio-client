import { useRecoilState } from 'recoil';
import { toastContentState, toastState } from '../store/Toast/toastState';

export const useToast = () => {
  const [open, setOpen] = useRecoilState(toastState);
  const [content, setContent] = useRecoilState(toastContentState);

  const openToast = (content: string) => {
    setOpen(true);
    setContent(content);
    setTimeout(() => {
      setOpen(false);
      setContent('');
    }, 2000);
  };
  return { openToast };
};
