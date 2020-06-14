import React from 'react';

import './WeekForecast.css';
import thunderstorm from '../../../pic/thunderstorm.png';
import lightRain from '../../../pic/rain_light.png';
import rain from '../../../pic/rain_heavy.png';
import freezingRain from '../../../pic/freezing_rain.png';
import heavyRain from '../../../pic/rain_very_heavy.png';
import snow from '../../../pic/snow.png';
import mist from '../../../pic/mist.png';
import dust from '../../../pic/dust.png';
import tornadoHurricane from '../../../pic/Tornado_hurricane.png';
import sunny from '../../../pic/sun1.png';
import fewClouds from '../../../pic/few_clouds.png';
import clouds from '../../../pic/medium_clouds.png';
import veryClouds from '../../../pic/very_clouds.png';




const Image = (props) => {
    let picSrc;
    if (props.idOfWeatherIcon < 312 && props.idOfWeatherIcon > 299) {picSrc = lightRain;}
    else if (props.idOfWeatherIcon < 322 && props.idOfWeatherIcon > 311) {picSrc = rain;}
    else if (props.idOfWeatherIcon === 500 || props.idOfWeatherIcon === 501) {picSrc = lightRain;}
    else if (props.idOfWeatherIcon === 502 || (props.idOfWeatherIcon > 511 && props.idOfWeatherIcon < 532)) {picSrc = rain;}
    else if (props.idOfWeatherIcon === 503 || props.idOfWeatherIcon === 504) {picSrc = heavyRain;}
    else if (props.idOfWeatherIcon === 800) {picSrc = sunny;}
    else if (props.idOfWeatherIcon === 801 || props.idOfWeatherIcon === 802) {picSrc = fewClouds;}
    else if (props.idOfWeatherIcon === 803) {picSrc = clouds;}
    else if (props.idOfWeatherIcon === 804) {picSrc = veryClouds;}
    else if (props.idOfWeatherIcon < 233 && props.idOfWeatherIcon > 199) {picSrc = thunderstorm;}
    else if (props.idOfWeatherIcon < 623 && props.idOfWeatherIcon > 599) {picSrc = snow;}
    else if (props.idOfWeatherIcon === 511) {picSrc = freezingRain;}
    else if (props.idOfWeatherIcon === 771 || props.idOfWeatherIcon === 781) {picSrc = tornadoHurricane;}
    else if (props.idOfWeatherIcon === 701 || props.idOfWeatherIcon === 711 || 
             props.idOfWeatherIcon === 721 || props.idOfWeatherIcon === 741) {picSrc = mist;}
    else if (props.idOfWeatherIcon === 731 || props.idOfWeatherIcon === 751 ||
             props.idOfWeatherIcon === 761 || props.idOfWeatherIcon === 762) {picSrc = dust;}
    return (
        <img src={picSrc} alt='dayPic' className='littlePic' />
    );
};

export default Image;