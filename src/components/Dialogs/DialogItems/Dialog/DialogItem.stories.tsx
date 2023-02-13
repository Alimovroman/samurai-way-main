import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {BrowserRouter, Route} from "react-router-dom";
import Dialog from "./Dialog";
import {store} from "../../../../redux/redux";

export default {
    title: 'DialogsItem',
    component: Dialog,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof Dialog>;

const Template: ComponentStory<typeof Dialog> = (args) => {
    return (
        <BrowserRouter>
            <Route render={() => <Dialog {...args} />}/>
        </BrowserRouter>
    )
}

export const DialogItem = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
DialogItem.args = {
    avatar: store._state.dialogsPage.dialogsData[0].avatar,
    name: 'Roma',
    path: 2
};

