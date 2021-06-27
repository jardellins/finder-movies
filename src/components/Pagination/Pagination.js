import React from 'react';

import './Style.css'

const MAX_ITEMS = 9
const MAX_LEFT = (MAX_ITEMS - 1) / 2

const Pagination = ({ totalPages, currentPage, nextPage }) => {
    const firstPage = Math.max(currentPage - MAX_LEFT, 1)
    
    const handleClick = (page) => {
        nextPage(page)
    }

    return (
        <ul>
            <li>
                <button
                    onClick={() => handleClick(currentPage - 1)}
                    className='buttonHandle'
                    disabled={currentPage === 1}
                >
                    Anterior
                </button>
            </li>
            {Array.from({length: Math.min(MAX_ITEMS, totalPages)}).map((_,index) => index + firstPage)
            .map((page) => (
                <button
                    key={page}
                    onClick={() => handleClick(page)}
                    className={page === currentPage ? 'buttonPage active' : 'buttonPage'}
                >
                    {page}
                </button>
            ))}
            <li>
                <button
                    onClick={() => handleClick(currentPage + 1)}
                    className='buttonHandle'
                    disabled={currentPage === totalPages}
                >
                    Próximo
                </button>
            </li>
        </ul>
    );
}

export default Pagination;