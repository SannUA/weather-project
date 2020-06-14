import React from 'react';

import Reactpic from '../../pic/React.png';

import './Footer.css';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='container'>
                <ul className='ul'>
                    <li className='li'>© Made by Aleksandr Baskakov, 2020</li>
                    <li className='li'>with React.js <img src = {Reactpic} alt={'ReactPic'} className='pic'/></li>
            </ul>
            </div>
        </div>
    );
};

export default Footer;