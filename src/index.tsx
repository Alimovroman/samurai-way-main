import React from 'react';
import './index.css';
import {StateType, store} from "./redux/state";
import ReactDOM from "react-dom";
import App from "./App";

let rerenderEntireTree = (state: StateType) => {
    ReactDOM.render(
        <App
            state={state}
            store={store}/>,
        document.getElementById('root')
    );
}
rerenderEntireTree(store.state)
store.subscribe(rerenderEntireTree)
