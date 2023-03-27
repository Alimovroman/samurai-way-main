import React, {FC} from 'react';
import {addMessageAction, addTextInMessageAction, MessageType} from "../../../redux/dialog-reducer";
import Messages from "./Messages";
import {compose, Dispatch} from "redux";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {Redirect} from "react-router-dom";
import withAuthRedirect from "../../../hoc/withAuthRedirect";

export type MessagesPropsType = MapStateToProps & MapDispatchToPropsType

type MapStateToProps = {
    messagesData: Array<MessageType>
    messageText: string

}
type MapDispatchToPropsType = {
    addMessage: () => void
    changeText: (text: string) => void

}

const mapStateToProps = (state: AppStateType): MapStateToProps => {
    return {
        messagesData: state.dialogsPage.messagesData,
        messageText: state.dialogsPage.messageText,

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

export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Messages)

