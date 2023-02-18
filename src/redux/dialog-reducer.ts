const ADD_MESSAGE = "ADD-MESSAGE"
const ADD_TEXT_IN_MESSAGE = "ADD-TEXT-IN-MESSAGE"

export type AddMessageACType = ReturnType<typeof addMessageAction>
export type AddTextInMessageACType = ReturnType<typeof addTextInMessageAction>
export type NameStyleMessageType = 'user' | 'friend'
export type DialogType = {
    id: number
    name: string
    avatar: string
}
export type MessageType = {
    id: number
    text: string
    nameStyle: NameStyleMessageType
}
export type DialogsType = {
    dialogsData: Array<DialogType>
    messagesData: Array<MessageType>
    messageText: string
}
type ActionType = AddMessageACType | AddTextInMessageACType

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

const dialogReducer = (state = initialState, action: ActionType): DialogsType => {
    switch (action.type) {
        case ADD_MESSAGE:
            const newMessage: MessageType = {
                id: 5, text: state.messageText, nameStyle: 'user'
            }
            state.messageText = ''
            return {
                ...state,
                messagesData: [
                    ...state.messagesData, newMessage
                ]
            }
        case ADD_TEXT_IN_MESSAGE:
            return {
                ...state,
                messageText: action.text
            }
        default:
            return state
    }
}

export default dialogReducer

export const addMessageAction = () => ({type: ADD_MESSAGE} as const)
export const addTextInMessageAction = (text: string) => ({type: ADD_TEXT_IN_MESSAGE, text} as const)