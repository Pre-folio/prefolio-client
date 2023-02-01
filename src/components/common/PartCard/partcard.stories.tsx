import { ComponentStory, ComponentMeta } from '@storybook/react';
import { PartCard } from '.';
import React, { useState } from 'react';

export default {
  title: 'PartCard',
  component: PartCard,
  argTypes: {},
} as ComponentMeta<typeof PartCard>;

const Template: ComponentStory<typeof PartCard> = (args) => {
  return <PartCard {...args} />;
};

export const Plan = Template.bind({});
Plan.args = {
  varient: 'plan',
};

export const Dev = Template.bind({});
Dev.args = {
  varient: 'dev',
};

export const Design = Template.bind({});
Design.args = {
  varient: 'design',
};
