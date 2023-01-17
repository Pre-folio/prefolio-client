import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from '.';

export default {
  title: 'Button',
  component: Button,
  argTypes: {},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Big = Template.bind({});
Big.args = {
  type: 'big',
  color: 'mint',
};

export const Medium = Template.bind({});
Medium.args = {
  type: 'medium',
  color: 'mint',
};

export const Small = Template.bind({});
Small.args = {
  type: 'small',
  color: 'mint',
};

export const Popup = Template.bind({});
Popup.args = {
  type: 'popup',
  color: 'mint',
};
