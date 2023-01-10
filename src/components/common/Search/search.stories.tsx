import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Search } from '.';

export default {
  title: 'Search',
  component: Search,
  argTypes: {},
} as ComponentMeta<typeof Search>;

const Template: ComponentStory<typeof Search> = (args) => <Search {...args} />;

export const Default = Template.bind({});
Default.args = {
  type: 'text',
  placeholder: '내용을 입력하세요.',
  typo: 'Body1',
};
