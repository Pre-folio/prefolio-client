import { ComponentStory, ComponentMeta } from '@storybook/react';
import { DatePicker } from '.';

export default {
  title: 'DatePicker',
  component: DatePicker,
  argTypes: {},
} as ComponentMeta<typeof DatePicker>;

const Template: ComponentStory<typeof DatePicker> = (args) => (
  <DatePicker {...args} />
);

export const Start = Template.bind({});
Start.args = {
  type: 'text',
  placeholder: '시작 날짜를 선택하세요.',
};

export const End = Template.bind({});
End.args = {
  type: 'text',
  placeholder: '종료 날짜를 선택하세요.',
};
