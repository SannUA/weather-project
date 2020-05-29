import React from 'react';

import WeekForecastEach from './WeekForecastEach';
import Spinner from 'react-bootstrap/Spinner';

class WeekForecast extends React.Component {

    state = {
        weekDays: [1, 2, 3, 4, 5, 6, 7],
        isLoaded: false,
        error: null,
        APIData: []
    }

    componentDidMount() {
        fetch('https://api.openweathermap.org/data/2.5/onecall?lat=50.4333&lon=30.5167&units=metric&exclude=current,hourly,minutely&appid=6fe5d797611fe6614d7e1fe142694059').then(res => res.json()).then(
          (result) => {
              console.log(result)
            this.setState({
              isLoaded: true,
              APIData: result.daily.slice(1)
            });
          },
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
        }

    componentDidUpdate(prevProps) {
            if (this.props.ChosenTown !== prevProps.ChosenTown) {
              const urlKiev = 'https://api.openweathermap.org/data/2.5/onecall?lat=50.4333&lon=30.5167&units=metric&exclude=current,hourly,minutely&appid=6fe5d797611fe6614d7e1fe142694059';
              const urlKharkov = 'https://api.openweathermap.org/data/2.5/onecall?lat=50&lon=36.25&units=metric&exclude=current,hourly,minutely&appid=6fe5d797611fe6614d7e1fe142694059';
              const urlOdessa = 'https://api.openweathermap.org/data/2.5/onecall?lat=46.4775&lon=30.7326&units=metric&exclude=current,hourly,minutely&appid=6fe5d797611fe6614d7e1fe142694059';
              const urlLviv = 'https://api.openweathermap.org/data/2.5/onecall?lat=49.8383&lon=24.0232&units=metric&exclude=current,hourly,minutely&appid=6fe5d797611fe6614d7e1fe142694059';
              let url;
              switch (this.props.ChosenTown) {
                case('Kiev'): url = urlKiev;
                break;
                case('Kharkov'): url = urlKharkov;
                break;
                case('Odessa'): url = urlOdessa;
                break;
                default: url = urlLviv;
              }
        
                fetch(url).then(res => res.json()).then(
                    (result) => {
                      this.setState({
                        isLoaded: true,
                        APIData: result.daily.slice(1)
                      });
                    },
                    (error) => {
                      this.setState({
                        isLoaded: true,
                        error
                      });
                    }
                  )
              
            }
          }
        
    render() {
        let content;
        if (this.state.isLoaded) {content = this.state.APIData.map((each, i) => {
                                    return <WeekForecastEach maxTemp={each.temp.max} 
                                                             minTemp={each.temp.min} 
                                                             description={each.weather[0].description} 
                                                             eachDay={i + 1}
                                                             idOfWeatherIcon = {each.weather[0].id}
                                                             key={i + 1}/>})} else {content = <Spinner animation="border" className='spinner'/>}
        console.log(this.state.APIData)
        return (
                <div className='weekForecast'>
                    <h3 className='h3'>Week Forecast</h3>
                    <div className='weekForecast'>
                    {content}
                    </div>
                </div>
        )
    }

}
    
export default WeekForecast;