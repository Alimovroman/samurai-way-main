import React, {FC} from 'react';
import style from './DialogItems.module.css'
import Dialog from "./Dialog/Dialog";

type DialogType = {
    id: number
    name: string
}
const DialogItems: FC = () => {
    let dialogsData: Array<DialogType> = [
        {id: 1, name: 'Masha'},
        {id: 2, name: 'Alex'},
        {id: 3, name: 'Nikolay'},
        {id: 4, name: 'Tanya'},
        {id: 5, name: 'Roma'},
        {id: 6, name: 'Vika'},
    ]
    return (
        <div className={style.dialogItems}>
            {dialogsData.map(obj => <Dialog key={obj.id} path={obj.id} name={obj.name} />)}
        </div>
    );
};

export default DialogItems;