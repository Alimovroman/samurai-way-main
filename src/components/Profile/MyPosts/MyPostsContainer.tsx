import React, {FC} from 'react';
import {ActionType, PostType, ProfilePageType} from "../../../redux/redux";
import {addPostAction, addTextInPostAction} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {MyContext} from "../../../StoreContext";

type MyPostsContainerPropsType = {
    // postData: Array<PostType>
    // textPost: string
    // dispatch: (action: ActionType) => void

}


const MyPostsContainer: FC<MyPostsContainerPropsType> = () => {


    return (
        <MyContext.Consumer>
            {(store) => {
                const addPost = () => {
                    const action = addPostAction()
                    store.dispatch(action)
                    // ref.current!.value = ''
                }
                const changeText = (text: string) => {
                    const action = addTextInPostAction(text)
                    store.dispatch(action)
                }

                const state: ProfilePageType = store.getState().profilePage
                return <MyPosts postData={state.postData}
                                textPost={state.textPost}
                                addPost={addPost}
                                changeText={changeText}/>
            }}

        </MyContext.Consumer>

    );
};

export default MyPostsContainer;