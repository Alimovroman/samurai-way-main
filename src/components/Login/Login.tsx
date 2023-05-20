import React, {FC} from 'react';
import LoginReduxForm, {LoginFormDataType} from "./LoginForm";
import {connect} from "react-redux";
import {login, logout} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";
import {Redirect} from "react-router-dom";
import style from './Login.module.css'

const Login: FC<MapDispatchToPropsType & MapStateToPropsType> = ({login, isAuth, captcha}) => {
    const submit = (formData: LoginFormDataType) => {
        const {email, password, rememberMe, captcha} = formData
        login(email, password, rememberMe, captcha)

    }

    if (isAuth) {
        return <Redirect to={'profile'}/>
    }
    return (
        <div className={style.loginBlock}>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={submit} captcha={captcha}/>
        </div>
    );
};


type MapDispatchToPropsType = {
    login: (email: string, password: string, rememberMe: boolean, captcha: string | null) => void
    logout: () => void
}
type MapStateToPropsType = {
    isAuth: boolean
    captcha: string | null
}
const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
        captcha: state.auth.captcha
    }
}
export default      connect(mapStateToProps, {login, logout})(Login);