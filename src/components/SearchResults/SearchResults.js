import React, {useContext} from 'react';
import './SearchResults.scss';
import useDebounce from '../../hooks/useDebounce';
import {Context} from '../../context';

const SearchResults = () => {
    const {searchTerm, totalResults} = useContext(Context);
    const debouncedSearchTerm = useDebounce(searchTerm, 500);

    return (
        <div className="search-results">
            {debouncedSearchTerm
            && <p>You searched for: <span className="search-query">'{debouncedSearchTerm}'</span>,
                <span className="search-count"> {totalResults !== undefined ? totalResults : 0}</span> result found</p>}
        </div>
    );
};

export default SearchResults;
