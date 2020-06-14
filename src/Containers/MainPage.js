import React, { Component } from 'react';

import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Header from '../Components/Header/Header';
import Forecast from '../Components/Forcast/Forecast';

import Footer from '../Components/Footer/Footer';
import './Backgrounds.css';





class MainPage extends Component {
    state = {
        ChosenTown: 'Kiev'
    }
    

    townChengingHandler(town){
        this.setState({ChosenTown: town});
    }
    render() {
        let style = 'townKiev';
        if (this.state.ChosenTown === 'Kharkov') {style = 'townKharkov';}
        if (this.state.ChosenTown === 'Odessa') {style = 'townOdessa';}
        if (this.state.ChosenTown === 'Lviv') {style = 'townLviv';}
                
               
    
        return( 
        <div className='body'>
            <div className={style}></ div>
            <div className='mainContent'>
                <Header />
                <div className='mainContainer'>
                    <div className='raw'>
                        <DropdownButton id={'dropdown-variants-Secondary'}
                                        variant={'Secondary'.toLowerCase()}
                                        title={'Choose city'}
                                        className='form'>
                            <Dropdown.Item eventKey="1" onClick={() => this.townChengingHandler('Kiev')}>Kiev</Dropdown.Item>
                            <Dropdown.Item eventKey="2" onClick={() => this.townChengingHandler('Kharkov')}>Kharkov</Dropdown.Item>
                            <Dropdown.Item eventKey="3" onClick={() => this.townChengingHandler('Odessa')}>Odessa</Dropdown.Item>
                            <Dropdown.Item eventKey="4" onClick={() => this.townChengingHandler('Lviv')}>Lviv</Dropdown.Item>
                        </DropdownButton>{' '}
                        <h1 className='nameOfCity'>{this.state.ChosenTown}</h1>
                        <Forecast ChosenTown={this.state.ChosenTown}/>
                    </div>
                    
                </div>

            </div>
            <Footer />
        </div>
        
        

        
        
        
        
        );
    }
}

export default MainPage;