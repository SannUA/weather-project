import React from 'react';

import Image from './PicForEachDay';

import './WeekForecast.css';

const WeekForecastEach = (props) => {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const months31Days = ["Jan", "Mar", "May", "Jul", "Aug", "Oct", "Dec"];
    const months30Days = ["Apr", "Jun", "Sep", "Nov"];
    let month = new Date().getMonth();
    let date = new Date().getDate();
    let eachDateOfWeek = date + props.eachDay; 
    if (eachDateOfWeek > 31 && months31Days.find(each => each === months[month])) { 
        month += 1;
        eachDateOfWeek -= 31 } else 
    if (eachDateOfWeek > 30 && months30Days.find(each => each === months[month])) { 
        month += 1;
        eachDateOfWeek -= 30 } else 
    if (eachDateOfWeek > 28 && months[month] === "Feb") { 
          month += 1;
          eachDateOfWeek -= 28} 

    return(<div className='each'>
<h2 className ='date'>{eachDateOfWeek + ' ' + months[month]}</h2>
<Image idOfWeatherIcon={props.idOfWeatherIcon}/>
{/* <img src={sun} alt='sun' className='littlePic'/> */}
        <div className='text'>
            <p className='little'>Max: {props.maxTemp.toFixed(1)}°C</p>
            <p className='little'>Min: {props.minTemp.toFixed(1)}°C</p>
            <p className='little'>{props.description[0].toUpperCase() + props.description.slice(1)}</p>
        </div>
        </div>
        
    )
}

export default WeekForecastEach;