
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
export type NameStyleMessageType = 'user' | 'friend'
export type MessageType = {
    id: number
    text: string
    nameStyle: NameStyleMessageType
}
export type FriendsSideBarType = {
    id: number
    name: string
    avatar: string
}

export type StoreType = {
    subscribe: (obs: any) => void
    state: StateType
    addPost: () => void
    addTextInPost: (text: string) => void
    addMessage: () => void
    addTextInMessage: (text: string) => void
    rerenderEntireTree: (state: StateType) => void
}

export const store: StoreType = {
    rerenderEntireTree: (state) => {
        console.log('yo y o yo')
    },
    subscribe: (observer: (state: StateType) => void) => {
        store.rerenderEntireTree = observer
    },
    state: {
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
                {id: 1, name: 'Alex', avatar: 'https://pixelbox.ru/wp-content/uploads/2022/06/avatar-telegram-girls-pixelbox.ru-49.jpg'},
                {id: 2, name: 'Mari', avatar: 'https://pixelbox.ru/wp-content/uploads/2022/06/avatar-telegram-girls-pixelbox.ru-49.jpg'},
                {id: 3, name: 'Boog', avatar: 'https://pixelbox.ru/wp-content/uploads/2022/06/avatar-telegram-girls-pixelbox.ru-49.jpg'}
            ]
        }
    },
    addPost: () => {
        const newPost: PostType = {
            id: 6, message: store.state.profilePage.textPost, counter: 0
        }

        store.state.profilePage.postData.push(newPost)
        store.state.profilePage.textPost = ''
        store.rerenderEntireTree(store.state)
    },
    addTextInPost: (text:string) => {
        store.state.profilePage.textPost = text
        store.rerenderEntireTree(store.state)
    },
    addMessage: () => {
        const newMessage: MessageType = {
            id: 5, text: store.state.dialogsPage.messageText, nameStyle: 'user'
        }
        store.state.dialogsPage.messagesData.push(newMessage)
        store.state.dialogsPage.messageText = ''
        store.rerenderEntireTree(store.state)
    },
    addTextInMessage: (text: string) => {
        store.state.dialogsPage.messageText = text
        store.rerenderEntireTree(store.state)
    }

}

// let rerenderEntireTree = (state: StateType) => {
//     console.log('yo y o yo')
// }

export type StateType = {
    profilePage: {
        postData: Array<PostType>
        textPost: string
    }
    dialogsPage: {
        dialogsData: Array<DialogType>
        messagesData: Array<MessageType>
        messageText: string
    }
    sideBar: {
        friends: Array<FriendsSideBarType>
    }
}

// const state: StateType = {
//     profilePage: {
//         postData: [
//             {id: 1, message: 'Hello', counter: 3},
//             {id: 2, message: 'how are you', counter: 5},
//             {id: 3, message: 'it is ok', counter: 7},
//             {id: 4, message: 'yo yo yo', counter: 13},
//             {id: 5, message: 'yuck', counter: 23},
//         ],
//         textPost: ''
//     },
//     dialogsPage: {
//         dialogsData: [
//             {id: 1, name: 'Masha', avatar: 'https://webmg.ru/wp-content/uploads/2022/05/i-122-9.jpeg'},
//             {id: 2, name: 'Alex', avatar: 'https://webmg.ru/wp-content/uploads/2022/05/i-122-9.jpeg'},
//             {id: 3, name: 'Nikolay', avatar: 'https://webmg.ru/wp-content/uploads/2022/05/i-122-9.jpeg'},
//             {id: 4, name: 'Tanya', avatar: 'https://webmg.ru/wp-content/uploads/2022/05/i-122-9.jpeg'},
//             {id: 5, name: 'Roma', avatar: 'https://webmg.ru/wp-content/uploads/2022/05/i-122-9.jpeg'},
//             {id: 6, name: 'Vika', avatar: 'https://webmg.ru/wp-content/uploads/2022/05/i-122-9.jpeg'},
//         ],
//         messagesData: [
//             {id: 1, text: 'Hello', nameStyle: 'user'},
//             {id: 2, text: 'How are you', nameStyle: 'friend'},
//             {id: 3, text: 'Fine thanks', nameStyle: 'user'},
//             {id: 4, text: 'Yo yo yo', nameStyle: 'friend'},
//         ],
//         messageText: ''
//     },
//     sideBar: {
//         friends: [
//             {id: 1, name: 'Alex', avatar: 'https://pixelbox.ru/wp-content/uploads/2022/06/avatar-telegram-girls-pixelbox.ru-49.jpg'},
//             {id: 2, name: 'Mari', avatar: 'https://pixelbox.ru/wp-content/uploads/2022/06/avatar-telegram-girls-pixelbox.ru-49.jpg'},
//             {id: 3, name: 'Boog', avatar: 'https://pixelbox.ru/wp-content/uploads/2022/06/avatar-telegram-girls-pixelbox.ru-49.jpg'}
//         ]
//     }
// }

// @ts-ignore
window.state = store.state

// export const addPost = () => {
//     const newPost: PostType = {
//         id: 6, message: state.profilePage.textPost, counter: 0
//     }
//     state.profilePage.postData.push(newPost)
//     state.profilePage.textPost = ''
//     rerenderEntireTree(state)
// }
// export const addMessage = () => {
//     const newMessage: MessageType = {
//         id: 5, text: state.dialogsPage.messageText, nameStyle: 'user'
//     }
//     state.dialogsPage.messagesData.push(newMessage)
//     state.dialogsPage.messageText = ''
//     rerenderEntireTree(state)
// }
// export const addTextInMessage = (text: string) => {
//     state.dialogsPage.messageText = text
//     rerenderEntireTree(state)
// }
// export const addTextInPost = (text:string) => {
//     state.profilePage.textPost = text
//     rerenderEntireTree(state)
// }

// export const subscribe = (observer: any) => {
//     rerenderEntireTree = observer
// }


