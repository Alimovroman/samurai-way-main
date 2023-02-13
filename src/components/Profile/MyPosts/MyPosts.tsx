import React, {FC, useRef} from 'react';
import style from './MyPosts.module.css'
import Post from "./Post/Post";
import {ActionType, PostType} from "../../../redux/redux";
import {addPostAction, addTextInPostAction} from "../../../redux/profile-reducer";

type MyPostsPropsType = {
    postData: Array<PostType>
    textPost: string
    dispatch: (action: ActionType) => void

}


const MyPosts: FC<MyPostsPropsType> = ({postData, textPost, dispatch}) => {

    const ref = useRef<HTMLTextAreaElement | null>(null)

    const addPost = () => {
        const action = addPostAction()
        ref.current && dispatch(action)
        // ref.current!.value = ''
    }
    const onChangeText = () => {
        const action = addTextInPostAction(ref.current!.value)
        dispatch(action)
    }

    return (
        <div>
            My posts
            <div>
                <textarea ref={ref} value={textPost} onChange={onChangeText}/>
                <button onClick={addPost}>Add post</button>
            </div>
            <div className={style.posts}>
                {postData.map((p => <Post key={p.id} message={p.message} counter={p.counter}/>))}
            </div>
        </div>
    );
};

export default MyPosts;