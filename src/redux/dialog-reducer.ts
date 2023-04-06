const ADD_MESSAGE = "ADD-MESSAGE"
const ADD_TEXT_IN_MESSAGE = "ADD-TEXT-IN-MESSAGE"

export type AddMessageACType = ReturnType<typeof addMessageAction>
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
}
export type DialogActionsType = AddMessageACType

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
}

const dialogReducer = (state = initialState, action: DialogActionsType): DialogsType => {
    switch (action.type) {
        case ADD_MESSAGE:
            const newMessage: MessageType = {
                id: 5, text: action.payload.message, nameStyle: 'user'
            }
            // state.messageText = ''
            return {
                ...state,
                messagesData: [
                    ...state.messagesData, newMessage
                ]
            }
        default:
            return state
    }
}

export default dialogReducer

export const addMessageAction = (message: string) => ({
    type: ADD_MESSAGE,
    payload: {
        message
    }
} as const)
