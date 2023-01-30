import React, {FC} from 'react';
import style from './Dialogs.module.css'
import DialogItems from "./DialogItems/DialogItems";
import Messages from "./Messages/Messages";
import {DialogType, MessageType} from "../../redux/state";

type DialogsPropsType = {
    dialogsState: {
        dialogsData: Array<DialogType>
        messagesData: Array<MessageType>
        messageText: string
    }
    addMessage: () => void
    addTextInMessage: (text: string) => void
}
const Dialogs: FC<DialogsPropsType> = ({dialogsState, addMessage, addTextInMessage}) => {
    return (
        <div className={style.dialogs}>
            <DialogItems dialogsData={dialogsState.dialogsData}/>
            <Messages messagesData={dialogsState.messagesData}
                      messageText={dialogsState.messageText}
                      addMessageCallBack={addMessage}
                      addTextInMessage={addTextInMessage}/>
        </div>
    );
};

export default Dialogs;