import {ActionType, DialogsType, MessageType, PostType} from "./state";
import exp from "constants";

const ADD_MESSAGE = "ADD-MESSAGE"
const ADD_TEXT_IN_MESSAGE = "ADD-TEXT-IN-MESSAGE"

const dialogReducer = (state: DialogsType, action: ActionType) => {
    switch (action.type) {
        case ADD_MESSAGE:
            const newMessage: MessageType = {
                id: 5, text: state.messageText, nameStyle: 'user'
            }
            state.messagesData.push(newMessage)
            state.messageText = ''
            return state
        case ADD_TEXT_IN_MESSAGE:
            state.messageText = action.text!
            return state
        default:
            return state
    }
}

export default dialogReducer

export const addMessageAction = (): ActionType => ({type: ADD_MESSAGE})
export const addTextInMessageAction = (text: string): ActionType => ({type: ADD_TEXT_IN_MESSAGE, text})