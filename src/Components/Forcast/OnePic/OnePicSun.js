import React from 'react';

import sun from '../../../pic/sun.png';
import Spinner from 'react-bootstrap/Spinner';
import './OnePic.css';

const OnePicSun = (props) => {
    let content
    if (props.error) {
        content = <div>Ошибка: {props.error.message}</div>;
      } else if (!props.isLoaded) {
        content =  <Spinner animation="border" className='spinner'/>;
      } else {content = <p className='par'>Sunrise: {new Date(props.sunrise * 1000).toLocaleTimeString()} <br></br>
      Sunset: {new Date(props.sunset * 1000).toLocaleTimeString()} </p>}
    return (
        <div className='onePic'>
            <img src={sun} alt='sun'className='pics' />
            {content}
        </div>
    )
}

export default OnePicSun;