import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {store} from "../../../redux/redux";
import MessagesContainer from "./MessagesContainer";


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'All Message',
  component: MessagesContainer,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof MessagesContainer>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof MessagesContainer> = (args) => <MessagesContainer {...args} />;

export const AllMessages = Template.bind({});
AllMessages.args = {

};

