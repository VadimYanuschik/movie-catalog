import React, {useContext, useState, useEffect} from 'react';
import './Catalog.scss';
import Movie from '../Movie/Movie';
import Pagination from '../Pagination/Pagination';
import Loader from '../Loader/Loader';
import {Context} from '../../context';
import useDebounce from '../../hooks/useDebounce';

function Catalog(props) {
    const {isLoading, results, totalResults, searchTerm} = useContext(Context);

    const debouncedSearchTerm = useDebounce(searchTerm, 500);

    return (
        <div className="catalog">
            {isLoading ? <Loader/> : (
                <div className="container">
                    <div className="search-results">
                        {!isLoading && debouncedSearchTerm
                            && <p>You searched for: <span className="search-query">'{debouncedSearchTerm}'</span>,
                            <span className="search-count"> {totalResults !== undefined ? totalResults : 0}</span> result found</p>}
                    </div>
                    <div className="catalog-layout">
                        {results !== undefined && results.map(({Title, Type, Year, Poster, imdbID}) => (
                            <Movie key={imdbID} Title={Title} Type={Type} Year={Year} Poster={Poster} />
                        ))}
                    </div>
                    {results !== undefined && results.length > 0 && <Pagination/>}
                </div>
            )}
        </div>
    );
}

export default Catalog;