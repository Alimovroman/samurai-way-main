const ADD_POST = "ADD-POST"
const ADD_TEXT_IN_POST = 'ADD-TEXT-IN-POST'

export type AddPostACType = ReturnType<typeof addPostAction>
export type AddTextInPostACType = ReturnType<typeof addTextInPostAction>
export type PostType = {
    id: number
    message: string
    counter: number
}
export type ProfilePageType = {
    postData: Array<PostType>
    textPost: string
}

const initialState: ProfilePageType = {
    postData: [
        {id: 1, message: 'Hello', counter: 3},
        {id: 2, message: 'how are you', counter: 5},
        {id: 3, message: 'it is ok', counter: 7},
        {id: 4, message: 'yo yo yo', counter: 13},
        {id: 5, message: 'yuck', counter: 23},
    ],
    textPost: ''
}
type ActionType = AddPostACType | AddTextInPostACType

const profileReducer = (state  = initialState, action: ActionType) => {
    switch (action.type) {
        case ADD_POST:
            const newPost: PostType = {
                id: 6, message: state.textPost, counter: 0
            }
            state.textPost = ''
            return {
                ...state,
                postData: [...state.postData, newPost]
            }
        case ADD_TEXT_IN_POST:
            return {
                ...state,
                textPost: action.text
            }
        default:
            return state
    }
}

export default profileReducer

export const addPostAction = () => ({type: ADD_POST} as const)

export const addTextInPostAction = (text: string) => ({type: ADD_TEXT_IN_POST, text} as const)