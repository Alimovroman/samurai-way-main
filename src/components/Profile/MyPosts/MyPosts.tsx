import React, {FC} from 'react';
import style from './MyPosts.module.css'
import Post from "./Post/Post";

type PostType = {
    id: number
    message: string
    counter: number
}
const MyPosts: FC = () => {

    let postData: Array<PostType> = [
        {id: 1, message: 'Hello', counter: 3},
        {id: 2, message: 'how are you', counter: 5},
        {id: 3, message: 'it is ok', counter: 7},
        {id: 4, message: 'yo yo yo', counter: 13},
        {id: 5, message: 'yuck', counter: 23},
    ]
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