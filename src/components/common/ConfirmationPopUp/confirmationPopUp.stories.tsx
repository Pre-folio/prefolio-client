import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useState } from 'react';
import { ConfirmationPopUp } from '.';
import { Button } from '../Button';

export default {
  title: 'ConfirmationPopUp',
  component: ConfirmationPopUp,
  argTypes: {},
} as ComponentMeta<typeof ConfirmationPopUp>;

const Template: ComponentStory<typeof ConfirmationPopUp> = (args) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  console.log(isOpen);
  return (
    <div>
      <Button
        type={'medium'}
        color={'mint'}
        content={'업로드하기'}
        onClick={() => setIsOpen(true)}
      />
      {isOpen && (
        <ConfirmationPopUp
          {...args}
          handleCancelButtonClick={() => setIsOpen(false)}
          handleUploadButtonClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

export const Default = Template.bind({});
