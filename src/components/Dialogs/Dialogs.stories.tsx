import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Dialogs from "./Dialogs";
import {store} from "../../redux/redux";
import {BrowserRouter, Route} from "react-router-dom";

export default {
  title: 'DialogsComponent',
  component: Dialogs,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Dialogs>;

const Template: ComponentStory<typeof Dialogs> = (args) => {
  return (
      <BrowserRouter>
        <Route render={() => <Dialogs {...args} /> }/>
      </BrowserRouter>
  )
}

export const DialogsComponent = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
DialogsComponent.args = {

};

