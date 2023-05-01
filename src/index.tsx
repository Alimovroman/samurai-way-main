import React from 'react';
import './index.css';
import ReactDOM from "react-dom";
import {SamurajJsApp} from "./App";
import store from "./redux/redux-store";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";



ReactDOM.render(
<SamurajJsApp />
        ,
        document.getElementById('root')
    );

