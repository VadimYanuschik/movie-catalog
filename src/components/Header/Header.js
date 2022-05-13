import React from 'react';
import './Header.scss';
import User from '../User/User';
import SearchBar from '../SearchBar/SearchBar';

function Header() {
    return (
        <div className="header">
            <div className="container">
                <h2 className="title">MovieCatalog</h2>
                <SearchBar/>
                <User/>
            </div>
        </div>
    );
}

export default React.memo(Header);