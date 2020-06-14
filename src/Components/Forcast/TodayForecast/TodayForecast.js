import React from 'react';

import OnePicTemp from '../OnePic/OnePicTemp';
import './TodayForecast.css';
import OnePicDrops from '../OnePic/OnePicDrops';
import OnePicWind from '../OnePic/OnePicWind';
import OnePicSun from '../OnePic/OnePicSun';

class TodayForecast extends React.Component {

    state = {
        error: null,
        isLoaded: false,
        APIData: {}
    }

    componentDidMount() {
      fetch('https://api.openweathermap.org/data/2.5/onecall?lat=50.4333&lon=30.5167&units=metric&exclude=daily,hourly,minutely&appid=6fe5d797611fe6614d7e1fe142694059').then(res => res.json()).then(
        (result) => {
          this.setState({
            isLoaded: true,
            APIData: result.current
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
      }

      componentDidUpdate(prevProps) {
        if (this.props.ChosenTown !== prevProps.ChosenTown) {
          const urlKiev = 'https://api.openweathermap.org/data/2.5/onecall?lat=50.4333&lon=30.5167&units=metric&exclude=daily,hourly,minutely&appid=6fe5d797611fe6614d7e1fe142694059';
          const urlKharkov = 'https://api.openweathermap.org/data/2.5/onecall?lat=50&lon=36.25&units=metric&exclude=daily,hourly,minutely&appid=6fe5d797611fe6614d7e1fe142694059';
          const urlOdessa = 'https://api.openweathermap.org/data/2.5/onecall?lat=46.4775&lon=30.7326&units=metric&exclude=daily,hourly,minutely&appid=6fe5d797611fe6614d7e1fe142694059';
          const urlLviv = 'https://api.openweathermap.org/data/2.5/onecall?lat=49.8383&lon=24.0232&units=metric&exclude=daily,hourly,minutely&appid=6fe5d797611fe6614d7e1fe142694059';
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
                    APIData: result.current
                  });
                },
                (error) => {
                  this.setState({
                    isLoaded: true,
                    error
                  });
                }
              );
          
        }
      }



    render() {

        return(
          
        <div className='todayForecast'>
            
            <OnePicTemp temp={this.state.APIData.temp} isLoaded={this.state.isLoaded} error={this.state.error}/>
            <OnePicDrops humidity={this.state.APIData.humidity} isLoaded={this.state.isLoaded} error={this.state.error}/>
            <OnePicWind wind={this.state.APIData.wind_speed} isLoaded={this.state.isLoaded} error={this.state.error}/>
            <OnePicSun sunrise={this.state.APIData.sunrise} sunset={this.state.APIData.sunset} isLoaded={this.state.isLoaded} error={this.state.error}/>
                </div>
            
        );
    }
}

export default TodayForecast;