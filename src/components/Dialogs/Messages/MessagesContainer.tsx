import React, {FC} from 'react';
import {addMessageAction, MessageType} from "../../../redux/dialog-reducer";
import Messages from "./Messages";
import {compose, Dispatch} from "redux";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {Redirect} from "react-router-dom";
import withAuthRedirect from "../../../hoc/withAuthRedirect";

export type MessagesPropsType = MapStateToProps & MapDispatchToPropsType

type MapStateToProps = {
    messagesData: Array<MessageType>

}
type MapDispatchToPropsType = {
    addMessage: (message: string) => void
}

const mapStateToProps = (state: AppStateType): MapStateToProps => {
    return {
        messagesData: state.dialogsPage.messagesData,
    }
}


const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addMessage: (message) => {
            dispatch(addMessageAction(message))
        }
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Messages)

