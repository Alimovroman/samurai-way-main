import React, {FC} from 'react';
import style from './Messages.module.css';
import Message from "./message/Message";
import {MessagesPropsType} from "./MessagesContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {TextArea} from "../../common/FormsControl/FormControls";
import {maxLength, minLength, required} from "../../../utils/validators/validators";


const Messages: FC<MessagesPropsType> = ({
                                             messagesData,
                                             addMessage,
                                         }) => {

    const addNewMessage = (formData: FormDataType) => {
        console.log(formData)
        addMessage(formData.message)
    }
    // if (!isAuthUser) return <Redirect to={'./login'} />
    return (
        <div className={style.messagesBlock}>
            <div className={style.messageWrapper}>
                {messagesData.map(mes => <Message key={mes.id} nameStyle={mes.nameStyle} text={mes.text}/>)}
            </div>
            <MessageReduxForm onSubmit={addNewMessage}/>
        </div>
    );
};

const maxLengthPost = maxLength(30)
const minLengthPost = minLength(5)

type FormDataType = {
    message: string
}
const MessageForm: FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={style.form}>
            <div>
                <Field component={TextArea}
                       name={"message"}
                       placeholder={"Enter your message"}
                       className={style.textArea}
                       validate={[required, maxLengthPost, minLengthPost]}
                />
            </div>
            <div>
                <button className={style.button}>Send</button>
            </div>
        </form>
    )
}
const MessageReduxForm = reduxForm<FormDataType>({
    form: "messages"
})(MessageForm)

export default Messages;