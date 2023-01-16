import React, {FC} from 'react';
import style from './DialogItems.module.css'
import Dialog from "./Dialog/Dialog";
import {DialogType} from "../../../redux/state";

type DialogsItemsProps = {
    dialogsData: Array<DialogType>
}
const DialogItems: FC<DialogsItemsProps> = ({dialogsData}) => {

    return (
        <div className={style.dialogItems}>
            {dialogsData.map(obj => <Dialog key={obj.id} path={obj.id} name={obj.name} avatar={obj.avatar} />)}
        </div>
    );
};

export default DialogItems;