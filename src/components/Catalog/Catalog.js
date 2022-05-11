import React, {useContext} from 'react';
import './Catalog.scss';
import Movie from '../Movie/Movie';
import Pagination from '../Pagination/Pagination';
import Loader from '../Loader/Loader';
import {Context} from '../../context';

function Catalog(props) {
    const {isLoading, results, totalResults, searchTerm} = useContext(Context);

    return (
        <div className="catalog">
            {isLoading ? <Loader/> : (
                <div className="container">
                    <div className="search-results">
                        {searchTerm.length > 0
                            && <p>You searched for: <span className="search-query">'{searchTerm}'</span>,
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