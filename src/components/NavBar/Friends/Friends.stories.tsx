import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Friends from "./Friends";
import {store} from "../../../redux/redux";


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Friends',
  component: Friends,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Friends>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Friends> = (args) => <Friends {...args} />;

export const FriendsComponent = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
FriendsComponent.args = {
  friends: store._state.sideBar.friends
};
