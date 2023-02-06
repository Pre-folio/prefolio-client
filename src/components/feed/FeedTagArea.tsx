import { useState } from 'react';
import { ActType, PartType } from '../../apis/post';
import { TagArea } from '../common/TagArea';
import { Flex, Space } from '../common/Wrapper';
import { TagTabBar } from './TagTabBar';

interface FeedTagAreaProps {
  type: PartType[];
  act: ActType[];
  handleTagAreaClick?: any;

  sort: boolean;
  handleTabBarClick?: any;
}

export const FeedTagArea = (props: FeedTagAreaProps) => {
  return (
    <Flex direction='column'>
      <Flex justify='flex-end'>
        <TagTabBar sort={props.sort} onClick={props.handleTabBarClick} />
      </Flex>
      <Space height={20} />
      <TagArea width='100%' {...props} />
    </Flex>
  );
};
