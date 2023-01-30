import React, {FC, useRef} from 'react';
import style from './MyPosts.module.css'
import Post from "./Post/Post";
import { PostType} from "../../../redux/state";

type MyPostsPropsType = {
    postData: Array<PostType>
    textPost: string
    addPostCallBack: () => void
    addTextInPost: (text: string) => void
}
const MyPosts: FC<MyPostsPropsType> = ({postData, textPost, addPostCallBack, addTextInPost}) => {

    const ref = useRef<HTMLTextAreaElement | null>(null)

    const addPost = () => {
        ref.current && addPostCallBack()
        // ref.current!.value = ''
    }
    const onChangeText = () => {
        addTextInPost(ref.current!.value)
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