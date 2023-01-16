import React, {FC} from "react";
import style from "./Dialog.module.css";
import {NavLink} from "react-router-dom";

export type DialogTypeProps = {
    path: number
    name: string
    avatar: string
}
const Dialog: FC<DialogTypeProps> = ({path, name, avatar}) => {
    return (
        <div className={style.dialog}>
            <div>
                <img className={style.avatar} src={avatar} alt={'avatar'} />
            </div>
            <NavLink to={`/message/${path}`} activeClassName={style.active}>{name}</NavLink>
        </div>
    )
}

export default Dialog;