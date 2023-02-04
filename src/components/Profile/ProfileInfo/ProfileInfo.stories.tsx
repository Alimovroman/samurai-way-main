import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ProfileInfo from "./ProfileInfo";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'ProfileInfo',
  component: ProfileInfo,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ProfileInfo>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ProfileInfo> = (args) => <ProfileInfo {...args} />;

export const ProfileInfoComponent = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ProfileInfoComponent.args = {

};
