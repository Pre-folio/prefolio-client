import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ProfileCard } from '.';

export default {
  title: 'PartCard',
  component: ProfileCard,
  argTypes: {},
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => {
  return <ProfileCard {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  imageSrc: '',
  nickname: '장영준',
  grade: 3,
  field: 'dev',
  hits: 22,
  scraps: 25,
};
