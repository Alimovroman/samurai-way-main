import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import MyPosts from "./MyPosts";
import {store} from "../../../redux/state";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Posts',
    component: MyPosts,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof MyPosts>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof MyPosts> = (args) => <MyPosts {...args} />;

export const MyPostsComponents = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
MyPostsComponents.args = {
    postData: store._state.profilePage.postData,
    textPost: store._state.profilePage.textPost,
    dispatch: store.dispatch
};
