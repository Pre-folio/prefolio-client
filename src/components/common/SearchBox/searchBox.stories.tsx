import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SearchBox } from '.';
import React from 'react';

export default {
  title: 'SearchBox',
  component: SearchBox,
  argTypes: {},
} as ComponentMeta<typeof SearchBox>;

const Template: ComponentStory<typeof SearchBox> = (args) => (
  <SearchBox {...args} />
);

export const Default = Template.bind({});
Default.args = {
  type: 'text',
  placeholder: '내용을 입력하세요.',
  typo: 'Body1',
};
