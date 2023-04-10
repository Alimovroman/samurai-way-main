import React, {FC} from 'react';
import './App.css';
import Dialogs from "./components/Dialogs/Dialogs";
import {Route, withRouter} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import NavBarContainer from "./components/NavBar/NavBar";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import {AppStateType} from "./redux/redux-store";
import Preloader from "./components/common/Preloader/Preloader";


type AppPropsType = MapDispatchToPropsType & MapStateToPropsType

class App extends React.Component<AppPropsType> {
    componentDidMount() {
        this.props.initializeApp()
    }
    render() {
        if (!this.props.initialized) {
            return <Preloader />
        }
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
                    <Route component={Login} path={'/login'}/>
                </div>
            </div>
        )
            ;
    }
}

type MapDispatchToPropsType = {
    initializeApp: () => void
}
type MapStateToPropsType = {
    initialized: boolean
}
const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        initialized: state.app.initialized
    }

}
export default compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, {initializeApp}),
)(App);
