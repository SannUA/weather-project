import React from 'react';

import drops from '../../../pic/drops.png';
import Spinner from 'react-bootstrap/Spinner';
import './OnePic.css';

const OnePicDrops = (props) => {
    let content;
    if (props.error) {
        content = <div className='onePicError'>Error: {props.error.message}</div>;
      } else if (!props.isLoaded) {
        content =  <Spinner animation="border" className='spinner'/>;
      } else {content = <p className='par'>{props.humidity}%</p>;}
    return (
        <div className='onePic'>
            <img src={drops} alt='drops'className='pics' />
            {content}
        </div>
    );
};

export default OnePicDrops;