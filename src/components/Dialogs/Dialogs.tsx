import React, {FC} from 'react';
import style from './Dialogs.module.css'
import DialogItems from "./DialogItems/DialogItems";
import Messages from "./Messages/Messages";
import {ActionType, DialogType, MessageType} from "../../redux/redux";
import MessagesContainer from "./Messages/MessagesContainer";

type DialogsPropsType = {
}
const Dialogs: FC<DialogsPropsType> = () => {
    return (
        <div className={style.dialogs}>
            <DialogItems />
            <MessagesContainer />
        </div>
    );
};

export default Dialogs;