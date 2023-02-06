import React, {FC} from 'react';
import style from './Dialogs.module.css'
import DialogItems from "./DialogItems/DialogItems";
import Messages from "./Messages/Messages";
import {ActionType, DialogType, MessageType} from "../../redux/state";

type DialogsPropsType = {
    dialogsState: {
        dialogsData: Array<DialogType>
        messagesData: Array<MessageType>
        messageText: string
    }
    dispatch: (action: ActionType) => void
}
const Dialogs: FC<DialogsPropsType> = ({dialogsState, dispatch}) => {
    return (
        <div className={style.dialogs}>
            <DialogItems dialogsData={dialogsState.dialogsData}/>
            <Messages messagesData={dialogsState.messagesData}
                      messageText={dialogsState.messageText}
                      dispatch={dispatch}
            />
        </div>
    );
};

export default Dialogs;