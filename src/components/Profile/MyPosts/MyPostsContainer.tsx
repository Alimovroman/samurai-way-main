import React from 'react';
import {addPostAction, PostType} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppStateType} from "../../../redux/redux-store";

export type MyPostsPropsType = MapStateToPropsType & MapDispatchToPropsType

type MapStateToPropsType = {
    postData: PostType[]
}
type MapDispatchToPropsType = {
    addPost: (post: string) => void
}
const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        postData: state.profilePage.postData,
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addPost: (post: string) => dispatch(addPostAction(post)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyPosts)