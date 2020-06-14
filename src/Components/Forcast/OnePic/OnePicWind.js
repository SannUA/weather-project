import React from 'react';

import wind from '../../../pic/wind.png';
import Spinner from 'react-bootstrap/Spinner';
import './OnePic.css';

const OnePicWind = (props) => {
    let content;
    if (props.error) {
        content = <div className='onePicError'>Error: {props.error.message}</div>;
      } else if (!props.isLoaded) {
        content =  <Spinner animation="border" className='spinner'/>;
      } else {content = <p className='par'>{props.wind}m/s</p>;}
    return (
        <div className='onePic'>
            <img src={wind} alt='wind'className='pics' />
            {content}
        </div>
    );
};

export default OnePicWind;