import {ActionType, DialogsType, MessageType, PostType} from "./redux";
import exp from "constants";

const ADD_MESSAGE = "ADD-MESSAGE"
const ADD_TEXT_IN_MESSAGE = "ADD-TEXT-IN-MESSAGE"

export type AddMessageACType = ReturnType<typeof addMessageAction>
export type AddTextInMessageACType = ReturnType<typeof addTextInMessageAction>

const initialState: DialogsType = {
    dialogsData: [
        {id: 1, name: 'Masha', avatar: 'https://webmg.ru/wp-content/uploads/2022/05/i-122-9.jpeg'},
        {id: 2, name: 'Alex', avatar: 'https://webmg.ru/wp-content/uploads/2022/05/i-122-9.jpeg'},
        {id: 3, name: 'Nikolay', avatar: 'https://webmg.ru/wp-content/uploads/2022/05/i-122-9.jpeg'},
        {id: 4, name: 'Tanya', avatar: 'https://webmg.ru/wp-content/uploads/2022/05/i-122-9.jpeg'},
        {id: 5, name: 'Roma', avatar: 'https://webmg.ru/wp-content/uploads/2022/05/i-122-9.jpeg'},
        {id: 6, name: 'Vika', avatar: 'https://webmg.ru/wp-content/uploads/2022/05/i-122-9.jpeg'},
    ],
    messagesData: [
        {id: 1, text: 'Hello', nameStyle: 'user'},
        {id: 2, text: 'How are you', nameStyle: 'friend'},
        {id: 3, text: 'Fine thanks', nameStyle: 'user'},
        {id: 4, text: 'Yo yo yo', nameStyle: 'friend'},
    ],
    messageText: ''
}

const dialogReducer = (state = initialState  , action: ActionType) => {
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

export const addMessageAction = () => ({type: ADD_MESSAGE} as const)
export const addTextInMessageAction = (text: string) => ({type: ADD_TEXT_IN_MESSAGE, text} as const)