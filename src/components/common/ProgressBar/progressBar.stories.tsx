import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ProgressBar } from '.';
import React from 'react';

export default {
  title: 'ProgressBar',
  component: ProgressBar,
  argTypes: {},
} as ComponentMeta<typeof ProgressBar>;

const Template: ComponentStory<typeof ProgressBar> = () => <ProgressBar />;

export const Default = Template.bind({});
