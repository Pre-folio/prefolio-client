import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Input } from '.';
import { SearchIcon } from '../../../assets/icons';

export default {
  title: 'Input',
  component: Input,
  argTypes: {},
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Large = Template.bind({});
Large.args = {
  type: 'text',
  placeholder: '제목을 입력하세요.',
  height: 56,
  padding: '16px 24px 24px 16px',
  typo: 'Heading3',
};

export const Small = Template.bind({});
Small.args = {
  type: 'text',
  placeholder: '내용을 입력하세요.',
  height: 46,
  padding: '14px 20px 14px 20px',
  typo: 'Body1',
};

export const Search = Template.bind({});
Search.args = {
  type: 'text',
  placeholder: '내용을 입력하세요.',
  height: 58,
  padding: '20px 0px 20px 34px',
  typo: 'Body1',
  leftIcon: <SearchIcon />,
};
