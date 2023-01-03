import React, {FC} from 'react';
import style from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts: FC = () => {
    return (
        <div>
            My posts
            <div>
                <textarea />
                <button>Add post</button>
            </div>
            <div className={style.posts}>
                <Post message={'Hello'} counter={3}/>
                <Post message={'how are you'} counter={5}/>
                <Post message={'it is ok'} counter={15}/>
                <Post message={'yo yo yo'} counter={2}/>
            </div>
        </div>
    );
};

export default MyPosts;