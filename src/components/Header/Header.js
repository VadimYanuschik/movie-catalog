import React, {useContext, useEffect, useRef, useState} from 'react';
import './Header.scss';

import { ReactComponent as UserIcon } from '../../assets/icons/user.svg';
import { ReactComponent as ArrowDown } from '../../assets/icons/arrow-down.svg';
import useDebounce from '../../hooks/useDebounce';
import searchMovies from '../../api/searchMovies';

import {Context} from '../../context';

function Header(props) {
    const {setIsLoading, setResults, searchTerm, setSearchTerm, setTotalResults, page, setPage} = useContext(Context);
    const [isModalShow, setIsModalShow] = useState(false);
    const modal = useRef(null);

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

    useEffect(() => {
        setIsLoading(true);

        searchMovies(searchTerm, page).then(results => {
            setIsLoading(false);
            setResults(results.Search);
            setTotalResults(results.totalResults);
        });
    }, [page])


    function handleClick() {
        setIsModalShow(!isModalShow)
    }

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
                <div className="user" onClick={handleClick}>
                    <UserIcon/>
                    <span>Вадим Янущик</span>
                    <ArrowDown/>
                    <div ref={modal} className={"user-modal " + (isModalShow ? 'active' : null)}>
                        <ul>
                            <li>Log out</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;