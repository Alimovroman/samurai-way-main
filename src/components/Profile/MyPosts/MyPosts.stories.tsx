import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {store} from "../../../redux/redux";
import MyPostsContainer from "./MyPostsContainer";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Posts',
    component: MyPostsContainer,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof MyPostsContainer>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof MyPostsContainer> = (args) => <MyPostsContainer {...args} />;

export const MyPostsComponents = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
MyPostsComponents.args = {

};
