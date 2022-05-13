import React, {useContext, useEffect} from 'react';
import './Pagination.scss';
import {Context} from '../../context';
import paginate from '../../helpers/paginate';
import validatePageChange from '../../helpers/validatePageChange';
import searchMovies from '../../api/searchMovies';

function Pagination() {
    const {totalResults, page, setPage, setIsLoading, searchTerm, setResults, setTotalResults} = useContext(Context);
    const pages = paginate(totalResults, page);

    function handleClick(e) {
        let clickedPage = e.target.dataset.page

        let validatedPage = validatePageChange(clickedPage, page, pages);
        setPage(validatedPage);
    }

    useEffect(() => {
        setIsLoading(true);

        searchMovies(searchTerm, page).then(results => {
            setIsLoading(false);
            setResults(results.Search);
            setTotalResults(results.totalResults);
        });
    }, [page])

    if(totalResults > 0) {
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
}

export default Pagination;