import React, {FC, useRef} from 'react';
import style from './MyPosts.module.css'
import Post from "./Post/Post";
import {PostType} from "../../../redux/redux";
type MyPostsPropsType = {
    postData: Array<PostType>
    textPost: string
    addPost: () => void
    changeText: (text: string) => void
    //dispatch: (action: ActionType) => void

}


const MyPosts: FC<MyPostsPropsType> = ({
                                           postData,
                                           textPost,
                                           addPost,
                                           changeText
                                       }) => {

    const ref = useRef<HTMLTextAreaElement | null>(null)

    const onAddPost = () => {
        ref.current && addPost()
    }
    const onChangeText = () => {
        changeText(ref.current!.value)
    }

    return (
        <div>
            My posts
            <div>
                <textarea ref={ref} value={textPost} onChange={onChangeText}/>
                <button onClick={onAddPost}>Add post</button>
            </div>
            <div className={style.posts}>
                {postData.map((p => <Post key={p.id} message={p.message} counter={p.counter}/>))}
            </div>
        </div>
    );
};

export default MyPosts;