import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TagArea } from '.';
import React from 'react';

export default {
  title: 'Tag',
  component: TagArea,
  argTypes: {},
} as ComponentMeta<typeof TagArea>;

const Template: ComponentStory<typeof TagArea> = () => <TagArea />;

export const Default = Template.bind({});
