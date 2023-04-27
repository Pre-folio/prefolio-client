import { useRecoilState } from 'recoil';
import {
  toastContentState,
  toastState,
  toastTypeState,
} from '../store/Toast/toastState';

export const useToast = () => {
  const [open, setOpen] = useRecoilState(toastState);
  const [content, setContent] = useRecoilState(toastContentState);
  const [type, setType] = useRecoilState(toastTypeState);

  const openToast = (content: string, type: 'success' | 'error') => {
    setOpen(true);
    setContent(content);
    setType(type);
    setTimeout(() => {
      setOpen(false);
      setContent('');
    }, 2000);
  };
  return { openToast };
};
