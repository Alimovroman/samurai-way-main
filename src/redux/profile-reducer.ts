import {ActionType, PostType, ProfilePageType} from "./redux";

const ADD_POST = "ADD-POST"
const ADD_TEXT_IN_POST = 'ADD-TEXT-IN-POST'

export type AddPostACType = ReturnType<typeof addPostAction>
export type AddTextInPostACType = ReturnType<typeof addTextInPostAction>

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


const profileReducer = (state  = initialState, action: ActionType) => {
    switch (action.type) {
        case ADD_POST:
            const newPost: PostType = {
                id: 6, message: state.textPost, counter: 0
            }
            state.postData.push(newPost)
            state.textPost = ''
            return state
        case ADD_TEXT_IN_POST:
            state.textPost = action.text!
            return state
        default:
            return state
    }
}

export default profileReducer

export const addPostAction = () => ({type: ADD_POST} as const)

export const addTextInPostAction = (text: string) => ({type: ADD_TEXT_IN_POST, text} as const)