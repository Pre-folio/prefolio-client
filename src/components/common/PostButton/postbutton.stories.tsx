import { ComponentStory, ComponentMeta } from '@storybook/react';
import { PostButton } from '.';

export default {
  title: 'PostButton',
  component: PostButton,
  argTypes: {},
} as ComponentMeta<typeof PostButton>;

const Template: ComponentStory<typeof PostButton> = (args) => {
  return <PostButton {...args} />;
};

export const Scrap = Template.bind({});
Scrap.args = {
  type: 'scrap',
};

export const Hit = Template.bind({});
Hit.args = {
  type: 'hit',
};
