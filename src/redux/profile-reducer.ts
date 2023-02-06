import {ActionType, PostType, ProfilePageType} from "./state";

const ADD_POST = "ADD-POST"
const ADD_TEXT_IN_POST = 'ADD-TEXT-IN-POST'


const profileReducer = (state: ProfilePageType, action: ActionType) => {
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

export const addPostAction = (): ActionType => ({type: ADD_POST})

export const addTextInPostAction = (text: string): ActionType => ({type: ADD_TEXT_IN_POST, text})