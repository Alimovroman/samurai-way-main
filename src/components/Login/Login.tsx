import React from 'react';
import {Field, reduxForm} from "redux-form";

const Login = () => {
    const submit = (value: any) => {
        console.log(value)
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={submit}/>
        </div>
    );
};
const LoginForm = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit }>
            <div>
                <Field placeholder={'Login'} name={'login'} component="input"/>
            </div>
            <div>
                <Field placeholder={'password'} name={'password'} component={"input"}/>
            </div>
            <div>
                <Field type={"checkbox"} name={"rememberMe"} component={"input"}/> remember me
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}
const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

export default Login;