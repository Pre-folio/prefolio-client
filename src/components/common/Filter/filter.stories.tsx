import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Filter } from '.';

export default {
  title: 'Filter',
  component: Filter,
  argTypes: {},
} as ComponentMeta<typeof Filter>;

const Template: ComponentStory<typeof Filter> = (args) => <Filter {...args} />;

export const Plan = Template.bind({});
Plan.args = {
  type: 'plan',
};

export const Dev = Template.bind({});
Dev.args = {
  type: 'dev',
};

export const Design = Template.bind({});
Design.args = {
  type: 'design',
};

export const Society = Template.bind({});
Society.args = {
  type: 'society',
};

export const Intern = Template.bind({});
Intern.args = {
  type: 'intern',
};

export const Project = Template.bind({});
Project.args = {
  type: 'project',
};
