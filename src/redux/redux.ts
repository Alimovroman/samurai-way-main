import profileReducer, {AddPostACType} from "./profile-reducer";
import dialogReducer, {AddMessageACType} from "./dialog-reducer";
import sideBarReducer from "./sideBar-reducer";

type PostType = {
    id: number
    message: string
    counter: number
}
type DialogType = {
    id: number
    name: string
    avatar: string
}
type NameStyleMessageType = 'user' | 'friend'
 type MessageType = {
    id: number
    text: string
    nameStyle: NameStyleMessageType
}
type FriendsSideBarType = {
    id: number
    name: string
    avatar: string
}
type ActionType = AddPostACType  | AddMessageACType
//     {
//     type: 'ADD-POST' | 'ADD-TEXT-IN-POST' | 'ADD-MESSAGE' | 'ADD-TEXT-IN-MESSAGE'
//     text?: string
// }
export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsType
    sideBar: SideBarType
}
type ProfilePageType = {
    postData: Array<PostType>
    textPost: string
}
type DialogsType = {
    dialogsData: Array<DialogType>
    messagesData: Array<MessageType>
    messageText: string
}
type SideBarType = {
    friends: Array<FriendsSideBarType>
}
export type StoreType = {
    subscribe: (obs: any) => void
    _state: StateType
    getState: () => StateType
    _callSubscriber: (state: StateType) => void
    dispatch: (action: ActionType) => void

}

export const store: StoreType = {
    _callSubscriber (state) {
        console.log('yo y o yo')
    },
    _state: {
        profilePage: {
            postData: [
                {id: 1, message: 'Hello', counter: 3},
                {id: 2, message: 'how are you', counter: 5},
                {id: 3, message: 'it is ok', counter: 7},
                {id: 4, message: 'yo yo yo', counter: 13},
                {id: 5, message: 'yuck', counter: 23},
            ],
            textPost: ''
        },
        dialogsPage: {
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
        },
        sideBar: {
            friends: [
                {
                    id: 1,
                    name: 'Alex',
                    avatar: 'https://pixelbox.ru/wp-content/uploads/2022/06/avatar-telegram-girls-pixelbox.ru-49.jpg'
                },
                {
                    id: 2,
                    name: 'Mari',
                    avatar: 'https://pixelbox.ru/wp-content/uploads/2022/06/avatar-telegram-girls-pixelbox.ru-49.jpg'
                },
                {
                    id: 3,
                    name: 'Boog',
                    avatar: 'https://pixelbox.ru/wp-content/uploads/2022/06/avatar-telegram-girls-pixelbox.ru-49.jpg'
                }
            ]
        }
    },
    subscribe (observer: (state: StateType) => void) {
        this._callSubscriber = observer
    },
    getState ()  {
        return this._state
    },
    dispatch (action) {
        // this._state.profilePage = profileReducer(this._state.profilePage,action)
        // this._state.dialogsPage = dialogReducer(this._state.dialogsPage,action)
        // this._state.sideBar = sideBarReducer(this._state.sideBar,action)
        this._callSubscriber(store._state)
    },
}
// @ts-ignore
window.state = store._state
