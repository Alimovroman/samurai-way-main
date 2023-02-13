import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {store} from "../../redux/redux";
import {BrowserRouter, Route} from "react-router-dom";
import NavBar from "./NavBar";

export default {
    title: 'NavBarComponent',
    component: NavBar,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof NavBar>;

const Template: ComponentStory<typeof NavBar> = (args) => {
    return (
        <BrowserRouter>
            <Route render={() => <NavBar {...args} />}/>
        </BrowserRouter>
    )
}

export const NavBarComponent = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
NavBarComponent.args = {

};

