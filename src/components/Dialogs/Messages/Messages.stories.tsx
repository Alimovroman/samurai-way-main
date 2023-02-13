import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Messages from "./Messages";
import {store} from "../../../redux/redux";


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'All Message',
  component: Messages,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Messages>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Messages> = (args) => <Messages {...args} />;

export const AllMessages = Template.bind({});
AllMessages.args = {
  messagesData: store._state.dialogsPage.messagesData,
  messageText:  store._state.dialogsPage.messageText,
  dispatch: store.dispatch
};

