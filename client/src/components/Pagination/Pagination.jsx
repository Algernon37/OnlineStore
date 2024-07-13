import React from 'react';
import style from './style/Pagination.module.sass';


const Pagination = ({ totalPages, currentPage, onPageChange }) => {
    return (
        <div className={style.pagination}>
            <div className={style.pagination__inner}>
                <button className={style.arrow} onClick={() => onPageChange(Math.max(1, currentPage - 1))}>
                    <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.99512 2L2.99512 7L7.99512 12L6.99512 14L-0.00488281 7L6.99512 0L7.99512 2Z" fill="black" />
                    </svg>
                </button>
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index}
                        className={`${style.pageNumber} ${currentPage === index + 1 ? style.active : ''}`}
                        onClick={() => onPageChange(index + 1)}
                    >
                        {index + 1}
                    </button>
                ))}
                <button className={style.arrow} onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}>
                    <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M-0.00500488 12L4.995 7L-0.00500488 2L0.994995 0L7.995 7L0.994995 14L-0.00500488 12Z" fill="black" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default Pagination;
