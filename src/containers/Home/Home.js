import React, { Component } from 'react';

import { fetchWeather } from '../../fetchWeather';
import './Home.css';

class Home extends Component {
    state = {
        search: '',
        weather: null
    }

    onChangeHandler = (event) => {
        this.setState({
          [event.target.name]: event.target.value
        });
    }

    onSearchHandler = async(e) => {
        if(e.key === "Enter") {
            const data = await fetchWeather(this.state.search);
            this.setState({weather: data, search: ''})
        }
    };

    render () {
        const todayTemp = new Date().toLocaleString();
        const today = todayTemp.split(',').slice(0, 1).join(' ');
        let forecast = null;
        if(this.state.weather !== null){
            const cTemp = (this.state.weather.main.temp)
            const fTemp = Math.round((cTemp * (9/5))+ 32);
            const weatherDescriptionTemp = (this.state.weather.weather[0].description);
            const weatherDescription = weatherDescriptionTemp.charAt(0).toUpperCase() + weatherDescriptionTemp.slice(1);
            forecast = (
                <div className="city">
                    <h2 className="city-name">
                        <span>{this.state.weather.name}</span>
                        <sup>{this.state.weather.sys.country}</sup>
                    </h2>
                    <p className="date">{today}</p>
                    <div className="city-temp">
                        {fTemp}
                        <sup>&deg;F</sup>
                    </div>
                    <div className="info">
                        <p>{weatherDescription}</p>
                    </div>
                </div>
            );
        }
        return (
            <div className="Home">
                <h1 id="appTitle"><i>atmosphere</i></h1>
                <p id="appBio">Get realtime weather data from over 200,000 cities.</p>
                <input 
                    type="text"
                    className="search"
                    placeholder="Search..."
                    name="search"
                    value={this.state.search}
                    onChange={(event) => this.onChangeHandler(event)}
                    onKeyPress={this.onSearchHandler}>
                </input>
                {forecast}
            </div>
        );
     }
}
  
export default Home;
  