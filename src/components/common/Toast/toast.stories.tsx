import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useRecoilState } from 'recoil';
import { Toast } from '.';
import { useToast } from '../../../hooks/useToasts';
import { toastContentState, toastState } from '../../../store/Toast/toastState';
import { Button } from '../Button';

export default {
  title: 'Toast',
  component: Toast,
  argTypes: {},
} as ComponentMeta<typeof Toast>;

const Template: ComponentStory<typeof Toast> = (args) => {
  const [open, setOpen] = useRecoilState(toastState);
  const [content, setContent] = useRecoilState(toastContentState);
  const { openToast } = useToast();

  return (
    <div>
      <Button
        type={'medium'}
        color={'mint'}
        content={'토스트 열기'}
        onClick={() => openToast('정보를 모두 입력해주세요!', 'error')}
      />
      <Toast varient={'error'} />
    </div>
  );
};

export const Default = Template.bind({});
