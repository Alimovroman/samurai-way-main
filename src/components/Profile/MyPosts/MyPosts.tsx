import React, {FC} from 'react';
import style from './MyPosts.module.css'
import Post from "./Post/Post";
import {MyPostsPropsType} from "./MyPostsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLength, minLength, required} from "../../../utils/validators/validators";
import {TextArea} from "../../common/FormsControl/FormControls";


const MyPosts: FC<MyPostsPropsType> = ({
                                           postData,
                                           addPost,
                                       }) => {

    const addNewPost = (formData: FormDataType) => {
        console.log(formData)
        addPost(formData.newPost)
    }

    return (
        <div>
            <div>
                My posts
            </div>
            <MessagePostReduxForm onSubmit={addNewPost}/>
            <div className={style.posts}>
                {postData.map((p => <Post key={p.id} message={p.message} counter={p.counter}/>))}
            </div>
        </div>
    );
};

const maxLengthPost = maxLength(30)
const minLengthPost = minLength(5)

type FormDataType = {
    newPost: string
}
const MessagePostForm: FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={TextArea}
                       name={"newPost"}
                       placeholder={"Enter your post"}
                       validate={[required, maxLengthPost, minLengthPost]}
                />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}
const MessagePostReduxForm = reduxForm<FormDataType>({
    form: "newPost"
})(MessagePostForm)

export default MyPosts;