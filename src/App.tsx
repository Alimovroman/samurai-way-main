import React, {FC} from 'react';
import './App.css';
import Dialogs from "./components/Dialogs/Dialogs";
import { Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import NavBarContainer from "./components/NavBar/NavBar";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";


type AppPropsType = {}
const App: FC<AppPropsType> = () => {
    return (
        <div className="app">
            <HeaderContainer/>
            <NavBarContainer/>
            <div className={'content'}>
                <Route render={() => <ProfileContainer/>} path={'/profile/:userId?'}/>
                <Route render={() => <Dialogs/>} path={'/message'}/>
                <Route render={() => <UsersContainer/>} path={'/users'}/>
                <Route component={News} path={'/news'}/>
                <Route component={Music} path={'/music'}/>
                <Route component={Settings} path={'/settings'}/>
            </div>
        </div>
    )
        ;
}


export default App;
