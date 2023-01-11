import { ComponentStory, ComponentMeta } from '@storybook/react';
import { PostCard } from '.';
import React from 'react';
import { useRecoilState } from 'recoil';
import { scrappedState } from '../../../store/Posts/postsState';

export default {
  title: 'PostCard',
  component: PostCard,
  argTypes: {},
} as ComponentMeta<typeof PostCard>;

const Template: ComponentStory<typeof PostCard> = (args) => {
  const [scrapped, setScrapped] = useRecoilState(scrappedState);

  return <PostCard {...args} scrapped={scrapped} setScrapped={setScrapped} />;
};

export const Default = Template.bind({});
Default.args = {
  title: '글제목 한 줄',
  field: ['기획'],
  activity: ['동아리/학회', '프로젝트', '인턴'],
  postDate: '2023.01.11',
  hits: 22,
};
