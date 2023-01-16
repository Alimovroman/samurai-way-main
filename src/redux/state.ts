export type PostType = {
    id: number
    message: string
    counter: number
}
export type DialogType = {
    id: number
    name: string
    avatar: string
}
export type MessageType = {
    id: number
    text: string
    nameStyle: 'user' | 'friend'
}
export type FriendsSideBarType = {
    id: number
    name: string
    avatar: string
}

export type StateType = {
    profilePage: {
        postData: Array<PostType>
    }
    dialogsPage: {
        dialogsData: Array<DialogType>
        messagesData: Array<MessageType>

    }
    sideBar: {
        friends: Array<FriendsSideBarType>
    }
}

const state: StateType = {
    profilePage: {
        postData: [
            {id: 1, message: 'Hello', counter: 3},
            {id: 2, message: 'how are you', counter: 5},
            {id: 3, message: 'it is ok', counter: 7},
            {id: 4, message: 'yo yo yo', counter: 13},
            {id: 5, message: 'yuck', counter: 23},
        ]
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
        ]
    },
    sideBar: {
        friends: [
            {id: 1, name: 'Alex', avatar: 'https://pixelbox.ru/wp-content/uploads/2022/06/avatar-telegram-girls-pixelbox.ru-49.jpg'},
            {id: 2, name: 'Mari', avatar: 'https://pixelbox.ru/wp-content/uploads/2022/06/avatar-telegram-girls-pixelbox.ru-49.jpg'},
            {id: 3, name: 'Boog', avatar: 'https://pixelbox.ru/wp-content/uploads/2022/06/avatar-telegram-girls-pixelbox.ru-49.jpg'}
        ]
    }
}

export default state