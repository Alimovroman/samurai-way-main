import React, {FC} from 'react';
import style from './Messages.module.css';
import Message from "./message/Message";

type MessageType = {
    id: number
    text: string
    nameStyle: 'user' | 'friend'
}

const Messages: FC = () => {

    let messagesData: Array<MessageType> = [
        {id: 1, text: 'Hello', nameStyle: 'user'},
        {id: 2, text: 'How are you', nameStyle: 'friend'},
        {id: 3, text: 'Fine thanks', nameStyle: 'user'},
        {id: 4, text: 'Yo yo yo', nameStyle: 'friend'},
    ]
    return (
        <div className={style.messages}>
            {messagesData.map( mes => <Message key={mes.id} nameStyle={mes.nameStyle} text={mes.text}/>)}
        </div>
    );
};

export default Messages;