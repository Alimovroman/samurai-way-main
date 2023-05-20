import React, {FC, useState} from 'react';
import style from "./Paginator.module.css";

type Props = {
    currenPage: number
    totalItemsCount: number
    pageSizeUsers: number
    setCurrentPage: (page: number) => void
    portionSize: number
}
const Paginator: FC<Props> = ({currenPage, totalItemsCount, pageSizeUsers, setCurrentPage, portionSize}) => {
    const totalPage = Math.ceil(totalItemsCount / pageSizeUsers)
    let pages = []
    for (let i = 1; i <= totalPage; i++) {
        pages.push(i)
    }

    const portionsCount = Math.ceil(totalPage / portionSize)
    const [portionNumber, setPortionNumber] = useState(1)
    const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    const rightPortionPageNumber = portionNumber * portionSize

    return (
        <div className={style.pages}>
            {portionNumber > 1 &&
                <button onClick={() => setPortionNumber(portionNumber - 1)} className={style.button}>
                    prev
                </button>}
            {pages
                .filter((p) => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map((p, i) => {
                    return <span key={i}
                                 onClick={() => setCurrentPage(p)}
                                 className={p === currenPage ? style.currentPage : style.page}>
                            {p}
                        </span>
                })}
            {portionsCount > portionNumber &&
                <button onClick={() => setPortionNumber(portionNumber + 1)} className={style.button}>
                    prev
                </button>}
        </div>
    );
};

export default Paginator;