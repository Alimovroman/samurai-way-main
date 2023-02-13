import React, {ChangeEvent, FC, useRef} from 'react';
import style from './Messages.module.css';
import Message from "./message/Message";
import {ActionType, DialogsType, MessageType} from "../../../redux/redux";
import {addMessageAction, addTextInMessageAction} from "../../../redux/dialog-reducer";
import Messages from "./Messages";
import {MyContext} from "../../../StoreContext";

type MessagesContainerPropsType = {
    // messagesData: Array<MessageType>
    // messageText: string
    // dispatch: (action: ActionType) => void
}


const MessagesContainer: FC<MessagesContainerPropsType> = () => {


    return (
        <MyContext.Consumer>
            {store => {
                const addMessage = () => {
                    store.dispatch(addMessageAction())
                }
                const changeText = (text: string) => {
                    store.dispatch(addTextInMessageAction(text))
                }
                const state: DialogsType = store.getState().dialogsPage
                return <Messages messagesData={state.messagesData}
                                 messageText={state.messageText}
                                 addMessage={addMessage}
                                 changeText={changeText}
                />
            }
            }
        </MyContext.Consumer>

    );
};

export default MessagesContainer;