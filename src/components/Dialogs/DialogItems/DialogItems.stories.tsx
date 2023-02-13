import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {BrowserRouter, Route} from "react-router-dom";
import DialogItems from "./DialogItems";
import {store} from "../../../redux/redux";

export default {
    title: 'DialogsItems',
    component: DialogItems,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof DialogItems>;

const Template: ComponentStory<typeof DialogItems> = (args) => {
    return (
        <BrowserRouter>
            <Route render={() => <DialogItems {...args} />}/>
        </BrowserRouter>
    )
}

export const DialogItemsComponent = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
DialogItemsComponent.args = {

};

