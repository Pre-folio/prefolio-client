import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useState } from 'react';
import { Filter } from '.';

export default {
  title: 'Filter',
  component: Filter,
  argTypes: {},
} as ComponentMeta<typeof Filter>;

const Template: ComponentStory<typeof Filter> = (args) => {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  return (
    <Filter
      {...args}
      isClicked={isClicked}
      onClick={() => setIsClicked(!isClicked)}
    />
  );
};

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
