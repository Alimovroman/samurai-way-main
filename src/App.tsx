import React, {Suspense} from 'react';
import './App.css';
import {BrowserRouter, Route, withRouter} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import NavBarContainer from "./components/NavBar/NavBar";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import store, {AppStateType} from "./redux/redux-store";
import Preloader from "./components/common/Preloader/Preloader";
import withSuspense from "./hoc/withSuspense";

//React Lazy
const Dialogs = React.lazy(() => import('./components/Dialogs/Dialogs'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));


//Component
class App extends React.Component<AppPropsType> {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (

            <div className="app">
                <HeaderContainer/>
                <NavBarContainer/>
                <div className={'content'}>
                    <Route render={withSuspense(ProfileContainer)} path={'/profile/:userId?'}/>
                    <Route render={withSuspense(Dialogs)} path={'/message'}/>
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

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        initialized: state.app.initialized
    }

}

const AppContainer = compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, {initializeApp}),
)(App);

export const SamurajJsApp = () => {
    return <BrowserRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>
}

//Type
type AppPropsType = MapDispatchToPropsType & MapStateToPropsType

type MapDispatchToPropsType = {
    initializeApp: () => void
}
type MapStateToPropsType = {
    initialized: boolean
}


