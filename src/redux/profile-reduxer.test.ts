import React from "react";
import profileReducer, {addPostAction, deletePostAC, ProfilePageType} from "./profile-reducer";
import ProfileReducer from "./profile-reducer";

const state: ProfilePageType = {
    postData: [
        {id: 1, message: 'Hello', counter: 3},
        {id: 2, message: 'how are you', counter: 5},
        {id: 3, message: 'it is ok', counter: 7},
        {id: 4, message: 'yo yo yo', counter: 13},
        {id: 5, message: 'yuck', counter: 23},
    ],
    userProfile: null,
    status: ''
}
test('new post should be added', () => {
    const action = addPostAction('New Post')

    const newState = profileReducer(state, action)

    expect(newState.postData.length).toBe(6)
    expect(newState.postData[5].message).toBe('New Post')
})
 test('new post should be deleted', () => {
     const action = deletePostAC(5)

     const newState = ProfileReducer(state, action)

     expect(newState.postData.length).toBe(4)

 })
test('new post should`t be deleted if id is incorrect', () => {
    const action = deletePostAC(105)

    const newState = ProfileReducer(state, action)

    expect(newState.postData.length).toBe(5)

})
