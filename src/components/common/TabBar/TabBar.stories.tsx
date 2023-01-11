import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useState } from 'react';
import { TabBar } from '.';

export default {
  title: 'TabBar',
  component: TabBar,
  argTypes: {},
} as ComponentMeta<typeof TabBar>;

const Template: ComponentStory<typeof TabBar> = (args) => {
  const [barState, setBarState] = useState<boolean>(true);

  return <TabBar {...args} barState={barState} setBarState={setBarState} />;
};

export const Default = Template.bind({});
