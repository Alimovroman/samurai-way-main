import React, {FC} from 'react';
import style from './Dialogs.module.css'
import DialogItems from "./DialogItems/DialogItems";
import Messages from "./Messages/Messages";
import {DialogType, MessageType} from "../../redux/state";

type DialogsPropsType = {
    dialogsState: {
        dialogsData: Array<DialogType>
        messagesData: Array<MessageType>
    }
}
const Dialogs: FC<DialogsPropsType> = ({dialogsState}) => {
    return (
        <div className={style.dialogs}>
            <DialogItems dialogsData={dialogsState.dialogsData}/>
            <Messages messagesData={dialogsState.messagesData}/>
        </div>
    );
};

export default Dialogs;