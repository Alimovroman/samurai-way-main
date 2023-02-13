import React, {ChangeEvent, FC, useRef} from 'react';
import style from './Messages.module.css';
import Message from "./message/Message";
import {ActionType, MessageType} from "../../../redux/redux";
import {addMessageAction, addTextInMessageAction} from "../../../redux/dialog-reducer";

type MessagesPropsType = {
    messagesData: Array<MessageType>
    messageText: string
    addMessage: () => void
    changeText: (text: string) => void

}


const Messages: FC<MessagesPropsType> = ({
                                             messagesData,
                                             messageText,
                                             addMessage,
                                             changeText
                                         }) => {

    const ref = useRef<HTMLTextAreaElement | null>(null)

    const onAddMessage = () => {
        ref.current && addMessage()
    }
    const onChangeText = () => {
        changeText(ref.current!.value)
    }

    return (
        <div className={style.messages}>
            {messagesData.map(mes => <Message key={mes.id} nameStyle={mes.nameStyle} text={mes.text}/>)}
            <div>
                <div>
                    <textarea ref={ref} onChange={onChangeText} value={messageText}/>
                </div>
                <div>
                    <button onClick={onAddMessage}>
                        Add
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Messages;