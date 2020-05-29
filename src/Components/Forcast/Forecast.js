import React from 'react';

import TodayForecast from './TodayForecast/TodayForecast';
import WeekForecast from './WeekForecast/WeekForecast';
import './Forecast.css';

const Forecast = (props) => {
    return (
        <div className='weather'>
            <div className='centerText'>
                <h3 className='h3'>Today Forecast</h3>
            </div>
            <TodayForecast ChosenTown= {props.ChosenTown}/>
            <WeekForecast ChosenTown= {props.ChosenTown}/>
        </div>
    )
}

export default Forecast;