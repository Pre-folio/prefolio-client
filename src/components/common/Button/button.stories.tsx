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
Big.args = {
  type: 'medium',
};

export const Small = Template.bind({});
Big.args = {
  type: 'small',
};

export const Popup = Template.bind({});
Big.args = {
  type: 'popup',
};
