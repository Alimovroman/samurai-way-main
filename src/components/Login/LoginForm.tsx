import {required} from "../../utils/validators/validators";
import React, {FC} from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {createField, Input} from "../common/FormsControl/FormControls";
import style from '../common/FormsControl/FormControls.module.css'
import s from './Login.module.css'

type PropsLoginFormType = {
    captcha: string | null
}

export type LoginFormDataType = {
    email: string
    password: string
    rememberMe: boolean
    isAuth: boolean
    captcha: string | null
}
const LoginForm: FC<InjectedFormProps<LoginFormDataType,  PropsLoginFormType> & PropsLoginFormType> = ({handleSubmit, error, captcha}) => {
    return (
        <form onSubmit={handleSubmit} className={s.formBlock}>
            {createField('Email', 'email', Input, [required], '', {})}
            {createField('Password', 'password', Input, [required], '', {type: 'password'})}
            {createField(null, 'rememberMe', Input, [], 'Remember me',  {type: 'checkbox'})}
            {captcha && <img src={captcha}/>}
            {captcha &&  createField(null, 'captcha', Input, [required], '',  {})}
            {error &&
                <div className={style.formSummuryError}>
                    {error}
                </div>
            }
            <div>
                <button className={s.button}>Login</button>
            </div>
        </form>
    )
}
const LoginReduxForm = reduxForm<LoginFormDataType, PropsLoginFormType>({
    form: 'login'
})(LoginForm)

export default LoginReduxForm

