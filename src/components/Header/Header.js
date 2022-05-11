import React, {useContext, useEffect} from 'react';
import './Header.scss';

import { ReactComponent as UserIcon } from '../../assets/icons/user.svg';
import { ReactComponent as ArrowDown } from '../../assets/icons/arrow-down.svg';
import useDebounce from '../../hooks/useDebounce';
import searchMovies from '../../api/searchMovies';

import {Context} from '../../context';

function Header(props) {
    const {setIsLoading, setResults, searchTerm, setSearchTerm, setTotalResults} = useContext(Context);


    const debouncedSearchTerm = useDebounce(searchTerm, 500);

    useEffect(() => {
        if (debouncedSearchTerm) {
            setIsLoading(true);

            searchMovies(debouncedSearchTerm).then(results => {
                setIsLoading(false);
                setResults(results.Search);
                setTotalResults(results.totalResults);
            });
        } else {
            setResults([]);
        }
    }, [debouncedSearchTerm]);


    return (
        <div className="header">
            <div className="container">
                <h2 className="title">MovieCatalog</h2>
                <input
                    onChange={e => setSearchTerm(e.target.value)}
                    className="search-bar"
                    type="text"
                    placeholder="Type something..."
                />
                <div className="user">
                    <UserIcon/>
                    <span>Вадим Янущик</span>
                    <ArrowDown/>
                </div>
            </div>
        </div>
    );
}

export default Header;