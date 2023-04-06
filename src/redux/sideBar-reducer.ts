export type SidebarActionsType = {type: ''}
export type FriendsSideBarType = {
    id: number
    name: string
    avatar: string
}
export type SideBarType = {
    friends: Array<FriendsSideBarType>
}

const initialState: SideBarType = {
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

const sideBarReducer = (state = initialState , action: SidebarActionsType) => {
    switch (action.type) {
        default:
            return state
    }
}

export default sideBarReducer;