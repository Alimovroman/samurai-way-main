import React, {FC} from 'react';
import style from './Messages.module.css';
import Message from "./message/Message";
import {MessageType} from "../../../redux/state";

type MessagesPropsType = {
    messagesData: Array<MessageType>
}

const Messages: FC<MessagesPropsType> = ({messagesData}) => {


    return (
        <div className={style.messages}>
            {messagesData.map( mes => <Message key={mes.id} nameStyle={mes.nameStyle} text={mes.text}/>)}
        </div>
    );
};

export default Messages;