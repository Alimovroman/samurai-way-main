import {ActionType, PostType, SideBarType} from "./redux";

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

const sideBarReducer = (state = initialState , action: ActionType) => {
    switch (action.type) {
        default:
            return state
    }
}

export default sideBarReducer;