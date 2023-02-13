import React, {FC} from 'react';
import style from './DialogItems.module.css'
import Dialog from "./Dialog/Dialog";
import {DialogType} from "../../../redux/redux";
import {MyContext} from "../../../StoreContext";

type DialogsItemsProps = {
}
const DialogItems: FC<DialogsItemsProps> = () => {

    return (
        <MyContext.Consumer>
            {store => {
                const dialogsData: DialogType[] = store.getState().dialogsPage.dialogsData
                return <div className={style.dialogItems}>
                    {dialogsData.map(obj => <Dialog key={obj.id} path={obj.id} name={obj.name} avatar={obj.avatar}/>)}
                </div>
            }
            }
        </MyContext.Consumer>

    );
};

export default DialogItems;