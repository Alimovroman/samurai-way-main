import React, {FC} from 'react';
import style from './Dialogs.module.css'
import DialogItems from "./DialogItems/DialogItems";
import MessagesContainer from "./Messages/MessagesContainer";
import DialogItemsContainer from "./DialogItems/DialogItems";

type DialogsPropsType = {}
const Dialogs: FC<DialogsPropsType> = () => {
    return (
        <div className={style.dialogs}>
            <DialogItemsContainer/>
            <MessagesContainer/>
        </div>
    );
};

export default Dialogs;