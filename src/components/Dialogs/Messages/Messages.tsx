import React, {FC} from 'react';
import style from './Messages.module.css';
import Message from "./message/Message";


const Messages: FC = () => {
    return (
        <div className={style.messages}>
            <Message nameStyle={'user'} text={'Hello'}/>
            <Message nameStyle={'friend'} text={'How are you'}/>
            <Message nameStyle={'user'} text={'Fine thanks'}/>
        </div>
    );
};

export default Messages;