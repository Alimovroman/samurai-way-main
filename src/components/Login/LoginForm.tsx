import {required} from "../../utils/validators/validators";
import React, {FC} from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {createField, Input} from "../common/FormsControl/FormControls";
import style from '../common/FormsControl/FormControls.module.css'


export type LoginFormDataType = {
    email: string
    password: string
    rememberMe: boolean
    isAuth: boolean
}
const LoginForm: FC<InjectedFormProps<LoginFormDataType>> = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField('Email', 'email', Input, [required], '', {})}
            {createField('Password', 'password', Input, [required], '', {type: 'password'})}
            {createField(null, 'rememberMe', Input, [], 'remember me',  {type: 'checkbox'})}

            {error &&
                <div className={style.formSummuryError}>
                    {error}
                </div>
            }
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}
const LoginReduxForm = reduxForm<LoginFormDataType>({
    form: 'login'
})(LoginForm)

export default LoginReduxForm

