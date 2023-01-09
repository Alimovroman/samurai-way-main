import React, {FC} from "react";
import style from "./Dialog.module.css";
import {NavLink} from "react-router-dom";

export type DialogTypeProps = {
    path: string
    name: string
}
const Dialog: FC<DialogTypeProps> = ({path, name}) => {
    return (
        <div className={style.dialog}>
            <NavLink to={`/message/${path}`} activeClassName={style.active}>{name}</NavLink>
        </div>
    )
}

export default Dialog;