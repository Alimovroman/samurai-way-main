import ReactDOM from "react-dom";
import App from "./App";
import {addMessage, addPost, addTextInMessage, addTextInPost, StateType} from "./redux/state";
import React from "react";

let rerenderEntireTree = (state: StateType) => {
    ReactDOM.render(
        <App
            state={state}
            addPost={addPost}
            addMessage={addMessage}
            addTextInMessage={addTextInMessage}
            addTextInPost={addTextInPost}/>,
        document.getElementById('root')
    );
}
export default rerenderEntireTree;