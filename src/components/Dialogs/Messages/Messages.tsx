import React, {ChangeEvent, FC, useRef} from 'react';
import style from './Messages.module.css';
import Message from "./message/Message";
import {ActionType, MessageType} from "../../../redux/state";
import {addMessageAction, addTextInMessageAction} from "../../../redux/dialog-reducer";

type MessagesPropsType = {
    messagesData: Array<MessageType>
    messageText: string
    dispatch: (action: ActionType) => void
}



const Messages: FC<MessagesPropsType> = ({messagesData, messageText, dispatch}) => {

    const ref = useRef<HTMLTextAreaElement | null>(null)

    const addMessage = () => {
        ref.current && dispatch(addMessageAction())
        // ref.current!.value = ''
    }
    const onChangeText = () => {
        dispatch(addTextInMessageAction(ref.current!.value))
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