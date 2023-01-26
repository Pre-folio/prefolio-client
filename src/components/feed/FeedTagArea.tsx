import { useState } from 'react';
import { TagArea } from '../common/TagArea';
import { Flex, Space } from '../common/Wrapper';
import { TagTabBar } from './TagTabBar';

export const FeedTagArea = () => {
  const [tabBar, setTabBar] = useState<boolean>(true);
  return (
    <Flex direction='column'>
      <Flex justify='flex-end'>
        <TagTabBar barState={tabBar} setBarState={setTabBar} />
      </Flex>
      <Space height={20} />
      <TagArea width='100%' />
    </Flex>
  );
};
