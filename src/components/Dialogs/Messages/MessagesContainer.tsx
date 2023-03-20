import React from 'react';
import {addMessageAction, addTextInMessageAction, MessageType} from "../../../redux/dialog-reducer";
import Messages from "./Messages";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";

export type MessagesPropsType = MapStateToProps & MapDispatchToPropsType

type MapStateToProps = {
    messagesData: Array<MessageType>
    messageText: string
    isAuthUser: boolean
}
type MapDispatchToPropsType = {
    addMessage: () => void
    changeText: (text: string) => void

}
const mapStateToProps = (state: AppStateType): MapStateToProps => {
    return {
        messagesData: state.dialogsPage.messagesData,
        messageText: state.dialogsPage.messageText,
        isAuthUser: state.auth.isAuth
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addMessage: () => {
            dispatch(addMessageAction())
        } ,
        changeText: (text: string) => {
            dispatch(addTextInMessageAction(text))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Messages)
