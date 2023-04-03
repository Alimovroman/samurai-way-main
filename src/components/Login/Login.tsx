import React, {FC} from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../common/FormsControl/FormControls";
import {maxLength, minLength, required} from "../../utils/validators/validators";

const Login = () => {
    const submit = (formData: FormDataType) => {
        console.log(formData)
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={submit}/>
        </div>
    );
};
const maxLengthPost = maxLength(30)
const minLengthPost = minLength(5)

type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}
const LoginForm: FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit }>
            <div>
                <Field placeholder={'Login'} name={'login'} component={Input} validate={[required, maxLengthPost, minLengthPost]} />
            </div>
            <div>
                <Field placeholder={'password'} name={'password'} component={Input} validate={[required, maxLengthPost, minLengthPost]} />
            </div>
            <div>
                <Field type={"checkbox"} name={"rememberMe"} component={Input}/> remember me
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}
const LoginReduxForm = reduxForm<FormDataType>({
    form: 'login'
})(LoginForm)

export default Login;