import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TagArea } from '.';
import React from 'react';

export default {
  title: 'TagArea',
  component: TagArea,
  argTypes: {},
} as ComponentMeta<typeof TagArea>;

const Template: ComponentStory<typeof TagArea> = () => <TagArea type={['plan']} act={['society']} />;

export const Default = Template.bind({});
