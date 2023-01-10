import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Tag } from '.';
import React from 'react';

export default {
  title: 'Tag',
  component: Tag,
  argTypes: {},
} as ComponentMeta<typeof Tag>;

const Template: ComponentStory<typeof Tag> = (args) => <Tag {...args} />;

export const Default = Template.bind({});
Default.args = {
  type: 'activity',
};

export const Plan = Template.bind({});
Plan.args = {
  type: 'field',
  color: 'mint',
};

export const Dev = Template.bind({});
Dev.args = {
  type: 'field',
  color: 'blue',
  content: '개발',
};

export const Design = Template.bind({});
Design.args = {
  type: 'field',
  color: 'purple',
  content: '디자인',
};
