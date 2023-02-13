import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import Post from "./Post";
import {store} from "../../../../redux/redux";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Post',
    component: Post,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof Post>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Post> = (args) => <Post {...args} />;

export const PostComponent = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
PostComponent.args = {
    message: store._state.profilePage.postData[0].message,
    counter: 7
};
