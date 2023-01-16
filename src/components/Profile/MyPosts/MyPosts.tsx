import React, {FC} from 'react';
import style from './MyPosts.module.css'
import Post from "./Post/Post";
import {PostType} from "../../../redux/state";

type MyPostsPropsType = {
    postData: Array<PostType>
}
const MyPosts: FC<MyPostsPropsType> = ({postData}) => {


    return (
        <div>
            My posts
            <div>
                <textarea />
                <button>Add post</button>
            </div>
            <div className={style.posts}>
                {postData.map((p => <Post key={p.id} message={p.message} counter={p.counter}/>))}
            </div>
        </div>
    );
};

export default MyPosts;