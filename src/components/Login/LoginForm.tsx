import {required} from "../../utils/validators/validators";
import React, {FC} from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../common/FormsControl/FormControls";
import style from '../common/FormsControl/FormControls.module.css'


export type LoginFormDataType = {
    email: string
    password: string
    rememberMe: boolean
    isAuth: any
}
const LoginForm: FC<InjectedFormProps<LoginFormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Email'} name={'email'}
                       component={Input}
                       validate={[required]}/>
            </div>
            <div>
                <Field placeholder={'Password'} name={'password'} component={Input} validate={[required]}/>
            </div>
            <div>
                <Field type={"checkbox"} name={"rememberMe"} component={Input}/> remember me
            </div>
            {props.error &&
                <div className={style.formSummuryError}>
                    {props.error}
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

