import React from 'react';
import './Header.scss';
import { ReactComponent as UserIcon } from '../../assets/icons/user.svg';
import { ReactComponent as ArrowDown } from '../../assets/icons/arrow-down.svg';

function Header(props) {
    return (
        <div className="header">
            <div className="container">
                <h2 className="title">MovieCatalog</h2>
                <input className="search-bar" type="text" placeholder="Type something..."/>
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