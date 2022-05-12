import React, {useContext} from 'react';
import './Pagination.scss';
import {Context} from '../../context';
import paginate from '../../helpers/paginate';
import validatePageChange from '../../helpers/validatePageChange';

function Pagination(props) {
    const {totalResults, page, setPage} = useContext(Context);
    const pages = paginate(totalResults, page);

    function handleClick(e) {
        let clickedPage = e.target.dataset.page

        let validatedPage = validatePageChange(clickedPage, page, pages);
        setPage(validatedPage);
    }

    return (
        <div className="pagination">
            <span onClick={handleClick} data-page={'prev'} className="pagination__link">&#60;</span>
            {
                pages.pages.map((pageLink) => (
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