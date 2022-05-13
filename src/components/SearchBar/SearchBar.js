import React, {useContext, useEffect} from 'react';
import './SearchBar.scss';
import useDebounce from '../../hooks/useDebounce';
import searchMovies from '../../api/searchMovies';
import {Context} from '../../context';

function SearchBar() {
    const {setIsLoading, setResults, searchTerm, setSearchTerm, setTotalResults, page, setPage} = useContext(Context);
    const debouncedSearchTerm = useDebounce(searchTerm, 500);

    useEffect(() => {
        if (debouncedSearchTerm) {
            setIsLoading(true);

            searchMovies(debouncedSearchTerm, page).then(results => {
                setIsLoading(false);
                setPage(1);
                setResults(results.Search);
                setTotalResults(results.totalResults);
            });
        } else {
            setResults([]);
        }
    }, [debouncedSearchTerm]);

    return (
        <input
            onChange={e => setSearchTerm(e.target.value)}
            className="search-bar"
            type="text"
            placeholder="Type something..."
        />
    );
}

export default SearchBar;