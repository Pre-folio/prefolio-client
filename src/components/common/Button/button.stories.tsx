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
};

export const Medium = Template.bind({});
Medium.args = {
  type: 'medium',
};

export const Small = Template.bind({});
Small.args = {
  type: 'small',
};

export const Popup = Template.bind({});
Popup.args = {
  type: 'popup',
};
