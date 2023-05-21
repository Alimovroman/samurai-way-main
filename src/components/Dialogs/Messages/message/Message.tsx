import React, {FC} from 'react';
import style from  './Message.module.css'
import {NameStyleMessageType} from "../../../../redux/dialog-reducer";

export type MessageTypeProps = {
    nameStyle: NameStyleMessageType
    text: string
}
const Message:FC<MessageTypeProps> = ({nameStyle, text}) => {
    return (
        <div className={nameStyle === 'friend' ? style.friendMessageContainer : style.userMessageContainer}>
            <div className={nameStyle === 'friend' ? style.text : style.userMessage }>
                {text}
            </div>

        </div>
    )
}

export default Message;