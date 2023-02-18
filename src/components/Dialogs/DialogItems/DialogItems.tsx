import React, {FC} from 'react';
import style from './DialogItems.module.css'
import Dialog from "./Dialog/Dialog";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppStateType} from "../../../redux/redux-store";
import {DialogType} from "../../../redux/dialog-reducer";

type DialogsItemsProps = MapStateToPropsType & MapDispatchToProps
const DialogItems: FC<DialogsItemsProps> = ({dialogsData}) => {
    return <div className={style.dialogItems}>
        {dialogsData.map(obj => <Dialog key={obj.id} path={obj.id} name={obj.name} avatar={obj.avatar}/>)}
    </div>
};

type MapStateToPropsType = {
    dialogsData: DialogType[]
}
const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        dialogsData: state.dialogsPage.dialogsData
    }
}

type MapDispatchToProps = {}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
    return {}
}

const DialogItemsContainer = connect(mapStateToProps, mapDispatchToProps)(DialogItems)

export default DialogItemsContainer;