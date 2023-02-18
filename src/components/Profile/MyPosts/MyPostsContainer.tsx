import React from 'react';
import {addPostAction, addTextInPostAction, PostType} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppStateType} from "../../../redux/redux-store";

export type MyPostsPropsType = MapStateToPropsType & MapDispatchToProps

type MapStateToPropsType = {
    postData: PostType[]
    textPost: string
}
type MapDispatchToProps = {
    addPost: () => void
    changeText: (text: string) => void
}
const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        postData: state.profilePage.postData,
        textPost: state.profilePage.textPost
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
    return {
        addPost: () => dispatch(addPostAction()),
        changeText: (text: string) => dispatch(addTextInPostAction(text))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyPosts)