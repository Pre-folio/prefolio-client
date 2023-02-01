import { useState } from 'react';
import { ActType, PartType } from '../../apis/post';
import { TagArea } from '../common/TagArea';
import { Flex, Space } from '../common/Wrapper';
import { TagTabBar } from './TagTabBar';

interface FeedTagAreaProps {
  type: PartType[];
  act: ActType[];
  onClick?: any;
}

export const FeedTagArea = (props: FeedTagAreaProps) => {
  const [tabBar, setTabBar] = useState<boolean>(true);
  return (
    <Flex direction='column'>
      <Flex justify='flex-end'>
        <TagTabBar barState={tabBar} setBarState={setTabBar} />
      </Flex>
      <Space height={20} />
      <TagArea width='100%' {...props} />
    </Flex>
  );
};
