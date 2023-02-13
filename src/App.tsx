import React, {FC} from 'react';
import './App.css';
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

type AppPropsType = {}
const App: FC<AppPropsType> = () => {
    return (
        <BrowserRouter>
            <div className="app">
                <Header/>
                <NavBar/>
                <div className={'content'}>
                    <Route render={() => <Profile/>} path={'/profile'}/>
                    <Route render={() => <Dialogs/>} path={'/message'}/>
                    <Route component={News} path={'/news'}/>
                    <Route component={Music} path={'/music'}/>
                    <Route component={Settings} path={'/settings'}/>
                </div>
            </div>
        </BrowserRouter>
    )
        ;
}


export default App;
