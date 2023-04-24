import React, {FC} from 'react';
import style from "./Paginator.module.css";

type Props = {
    currenPage: number
    totalUserCount: number
    pageSizeUsers: number
    setCurrentPage: (page: number) => void
}
const Paginator: FC<Props> = (props) => {
    const totalPage = Math.ceil(props.totalUserCount / props.pageSizeUsers)
    let pages = []
    for (let i = 1; i <= totalPage; i++) {
        pages.push(i)
    }
    return (
        <div className={style.pages}>
            {pages.map((p, i) => {
                return <span key={i}
                             onClick={() => props.setCurrentPage(p)}
                             className={p === props.currenPage ? style.currentPage : ''}>
                            {p}
                        </span>
            })}
        </div>
    );
};

export default Paginator;