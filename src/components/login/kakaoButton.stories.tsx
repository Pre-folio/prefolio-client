import { ComponentStory, ComponentMeta } from '@storybook/react';
import { KakaoButton } from './KakaoButton';

export default {
  title: 'KakaoButton',
  component: KakaoButton,
  argTypes: {},
} as ComponentMeta<typeof KakaoButton>;

const Template: ComponentStory<typeof KakaoButton> = () => <KakaoButton />;

export const Default = Template.bind({});
