import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Message from "./Message";


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Message',
  component: Message,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Message>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Message> = (args) => <Message {...args} />;

export const FriendMessage = Template.bind({});
FriendMessage.args = {
  text: 'yoyoyyo',
  nameStyle:'friend'
};

export const MainUserMessage = Template.bind(({}))
MainUserMessage.args = {
  text: 'Hello bro',
  nameStyle: "user"
}