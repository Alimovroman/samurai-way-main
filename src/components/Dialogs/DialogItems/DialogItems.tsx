import React, {FC} from 'react';
import style from './DialogItems.module.css'
import Dialog from "./Dialog/Dialog";


const DialogItems: FC = () => {
    return (
        <div className={style.dialogItems}>
            <Dialog path={'1'} name={'Masha'} />
            <Dialog path={'2'} name={'Alex'} />
            <Dialog path={'3'} name={'Nikolay'} />
            <Dialog path={'4'} name={'Tanya'} />
            <Dialog path={'5'} name={'Roma'} />
            <Dialog path={'6'} name={'Vika'} />
        </div>
    );
};

export default DialogItems;