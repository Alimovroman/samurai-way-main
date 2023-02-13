import React from 'react';
import './index.css';
import {StateType} from "./redux/redux";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./redux/redux-store";

let state:StateType = store.getState()

let rerenderEntireTree = (state: StateType) => {
    ReactDOM.render(
        <App
            state={state}
            dispatch={store.dispatch.bind(store)}/>,
        document.getElementById('root')
    );
}
rerenderEntireTree(state)

 store.subscribe(() => {
     rerenderEntireTree(state)
 })
