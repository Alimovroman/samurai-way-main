import React, {ChangeEvent, FC, useRef} from 'react';
import style from './Messages.module.css';
import Message from "./message/Message";
import {MessagesPropsType} from "./MessagesContainer";
import {Redirect} from "react-router-dom";


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
    // if (!isAuthUser) return <Redirect to={'./login'} />
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