import React, {FC} from 'react';
import style from  './Message.module.css'
import {NameStyleMessageType} from "../../../../redux/redux";

export type MessageTypeProps = {
    nameStyle: NameStyleMessageType
    text: string
}
const Message:FC<MessageTypeProps> = ({nameStyle, text}) => {
    return (
        <div className={nameStyle === 'friend' ? style.friendMessage : style.userMessage}>
            <div className={ style.text }>
                {text}
            </div>

        </div>
    )
}

export default Message;