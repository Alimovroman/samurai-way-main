import React, {ChangeEvent, FC, useRef} from 'react';
import style from './Messages.module.css';
import Message from "./message/Message";
import {MessageType} from "../../../redux/state";

type MessagesPropsType = {
    messagesData: Array<MessageType>
    messageText: string
    addMessageCallBack: () => void
    addTextInMessage: (text: string) => void
}

const Messages: FC<MessagesPropsType> = ({messagesData, messageText, addMessageCallBack, addTextInMessage}) => {

    const ref = useRef<HTMLTextAreaElement | null>(null)

    const addMessage = () => {
        ref.current && addMessageCallBack()
        // ref.current!.value = ''
    }
    const onChangeText = () => {
        addTextInMessage(ref.current!.value)
    }

    return (
        <div className={style.messages}>
            {messagesData.map( mes => <Message key={mes.id} nameStyle={mes.nameStyle} text={mes.text}/>)}
            <div>
                <div>
                    <textarea ref={ref} onChange={onChangeText} value={messageText}/>
                </div>
                <div>
                    <button onClick={addMessage}>
                        Add
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Messages;