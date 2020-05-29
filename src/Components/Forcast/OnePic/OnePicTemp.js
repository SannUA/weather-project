import React from 'react';

import temp from '../../../pic/temp.png';
import Spinner from 'react-bootstrap/Spinner';
import './OnePic.css';

const OnePicTemp = (props) => {

    let content
    if (props.error) {
        content = <div>Ошибка: {props.error.message}</div>;
      } else if (!props.isLoaded) {
        content =  <Spinner animation="border" className='spinner'/>;
      } else {content = <p className='par'>{props.temp.toFixed(1)}°C</p>}

    return (
        <div className='onePic'>
            <img src={temp} alt='temp'className='pics' />
            {content}
            
        </div>
    )
}

export default OnePicTemp;