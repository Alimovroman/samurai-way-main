import React, {FC} from 'react';
import LoginReduxForm, {LoginFormDataType} from "./LoginForm";
import {connect} from "react-redux";
import {login, logout} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";
import {Redirect} from "react-router-dom";

const Login: FC<MapDispatchToPropsType & MapStateToPropsType> = ({login, isAuth}) => {
    const submit = (formData: LoginFormDataType) => {
        const {email, password, rememberMe} = formData
        login(email, password, rememberMe)

    }

    if (isAuth) {
        return <Redirect to={'profile'}/>
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={submit}/>
        </div>
    );
};


type MapDispatchToPropsType = {
    login: (email: string, password: string, rememberMe: boolean) => void
    logout: () => void
}
type MapStateToPropsType = {
    isAuth: boolean
}
const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}
export default      connect(mapStateToProps, {login, logout})(Login);