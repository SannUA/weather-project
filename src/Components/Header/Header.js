import React from 'react';

import './Header.css';
import logo from '../../pic/Logo.png';

const Header = () => {
    return (
        <header>
                <img src={logo} alt="logo.png" className='logo'/>
        </header>
    );
};

export default Header;