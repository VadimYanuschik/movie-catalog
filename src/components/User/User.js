import React, {useState} from 'react';
import './User.scss';
import {ReactComponent as UserIcon} from '../../assets/icons/user.svg';
import {ReactComponent as ArrowDown} from '../../assets/icons/arrow-down.svg';

function User() {
    const [isModalShow, setIsModalShow] = useState(false);

    function handleClick() {
        setIsModalShow(!isModalShow)
    }

    return (
        <div className="user" onClick={handleClick}>
            <UserIcon/>
            <span>Вадим Янущик</span>
            <ArrowDown/>
            <div className={"user-modal " + (isModalShow ? 'active' : null)}>
                <ul>
                    <li>Log out</li>
                </ul>
            </div>
        </div>
    );
}

export default User;