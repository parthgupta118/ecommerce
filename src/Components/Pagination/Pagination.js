import React from "react";
import _ from "lodash";

import classes from './Pagination.module.css';

const Pagination = ({ itemsCount, cardsPPage, onPageChange, currentPage }) => {
    
    const pagesCount = Math.ceil(itemsCount / cardsPPage);
    if (pagesCount === 1) return null;
    const pages =_.range(1, pagesCount + 1 );


    return  (
    <nav>
        <ul className={classes.Pagination}>
            {pages.map(page => (
                <li key={page} onClick = {() => onPageChange(page)} className={page === currentPage ? [classes.Page, classes.active].join(' ') : classes.Page }>
                    <p className={classes.PageLink}>{page}</p>
                </li>
            ))}
        </ul>
    </nav> 
    );
}

export default Pagination;