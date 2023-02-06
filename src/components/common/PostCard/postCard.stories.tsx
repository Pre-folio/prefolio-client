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

  return <PostCard {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  title: '글제목 한 줄',
  field: ['plan'],
  activity: ['society', 'project', 'intern'],
  postDate: '2023.01.11',
  hits: 22,
};
