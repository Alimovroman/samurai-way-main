import React, {FC} from 'react';
import style from './Dialogs.module.css'
import DialogItems from "./DialogItems/DialogItems";
import Messages from "./Messages/Messages";

const Dialogs: FC = () => {
    return (
        <div className={style.dialogs}>
            <DialogItems />
            <Messages />
        </div>
    );
};

export default Dialogs;