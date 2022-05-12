import React, {useContext, useEffect} from 'react';
import './Pagination.scss';
import {Context} from '../../context';
import paginate from '../../helpers/paginate';
import searchMovies from '../../api/searchMovies';

function Pagination(props) {
    const {totalResults, page, setPage} = useContext(Context);
    const pages = paginate(totalResults, page);
    
    function handleClick(e) {
        let clickedPage = e.target.dataset.page

        if (clickedPage === 'prev') {
            if(Number(page) === 1) setPage(1)
            if(Number(page) !== pages.startPage) setPage(Number(page) - 1);
        }
        if (clickedPage === 'next') {
            if(Number(page) === pages.totalPages) setPage(pages.totalPages);
            if(Number(page) !== pages.totalPages) setPage(Number(page) + 1);

        }
        if (clickedPage !== 'prev' && clickedPage !== 'next') {
            setPage(clickedPage);
        }
    }

    return (
        <div className="pagination">
            <span onClick={handleClick} data-page={'prev'} className="pagination__link">&#60;</span>
            {
                pages.pages.map((pageLink, index) => (
                    <span
                        onClick={handleClick}
                        data-page={pageLink}
                        key={pageLink}
                        className={"pagination__link " + (Number(pageLink) === Number(page) ? 'active' : '')}
                    >
                        {pageLink}
                    </span>
                ))
            }
            <span onClick={handleClick} data-page={'next'} className="pagination__link">&#62;</span>
        </div>
    );
}

export default Pagination;