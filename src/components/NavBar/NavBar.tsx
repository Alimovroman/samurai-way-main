import React, {FC} from "react";
import style from './NabBar.module.css'
import {NavLink} from "react-router-dom";
import Friends from "./Friends/Friends";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppStateType} from "../../redux/redux-store";
import {FriendsSideBarType} from "../../redux/sideBar-reducer";

type NavbarPropsType = MapStateToPropsType & MapDispatchToPropsType
const NavBar: FC<NavbarPropsType> = ({friends}) => {
    return (
        <nav className={style.nav}>
            <div className={style.itemContainer}>
                <NavLink className={style.item} activeClassName={style.active} to={'/profile'}>Profile</NavLink>
            </div>
            <div className={style.itemContainer}>
                <NavLink className={style.item} activeClassName={style.active} to={'/message'}>Message</NavLink>
            </div>
            <div className={style.itemContainer}>
                <NavLink className={style.item} activeClassName={style.active} to={'/users'}>Users</NavLink>
            </div>
            <div className={style.itemContainer}>
                <NavLink className={style.item} activeClassName={style.active} to={'/news'}>News</NavLink>
            </div>
            <div className={style.itemContainer}>
                <NavLink className={style.item} activeClassName={style.active} to={'/music'}>Music</NavLink>
            </div>
            <div className={style.itemContainer}>
                <NavLink className={style.item} activeClassName={style.active} to={'/settings'}>Settings</NavLink>
            </div>
            <Friends friends={friends}/>
        </nav>
    )
}

type MapStateToPropsType = {
    friends: FriendsSideBarType[]
}
const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        friends: state.sideBar.friends
    }
}
type MapDispatchToPropsType = {}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {}
}
const NavBarContainer = connect(mapStateToProps, mapDispatchToProps)(NavBar)

export default NavBarContainer;