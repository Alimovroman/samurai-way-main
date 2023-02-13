import React from 'react';
import './index.css';
import {StateType} from "./redux/redux";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./redux/redux-store";
import { Provider} from "./StoreContext";

let state:StateType = store.getState()

let rerenderEntireTree = (state: StateType) => {
    ReactDOM.render(
        <Provider store={store}>
            <App/>
        </Provider>
,
        document.getElementById('root')
    );
}
rerenderEntireTree(state)

 store.subscribe(() => {
     rerenderEntireTree(state)
 })
