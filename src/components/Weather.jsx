/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import './weather.css';
import { FaSearch, FaWind } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';
import { WiHumidity } from 'react-icons/wi';
import moment from 'moment-timezone';
import { BsMoon, BsSun } from 'react-icons/bs';
import cloudy from '../Assets/cloudy.png';
import sunny from '../Assets/sunny.png';
import rainy from '../Assets/rainy.png';
import snowy from '../Assets/snowy.png';

const Weather = () => {
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState('');
    const [time, setTime] = useState('');
    const [date, setDate] = useState('');
    const [darkMode, setDarkMode] = useState(false);

    const API_KEY = '9658da14a0744eaaac2881a193583fd2';

    useEffect(() => {
        if (weather && weather.timezone) {
            const timezone = weather.timezone / 3600;
            const formattedTime = moment().utcOffset(timezone).format('HH:mm');
            const formattedDate = moment().utcOffset(timezone).format('YYYY-MM-DD');
            setTime(formattedTime);
            setDate(formattedDate);
        }
    }, [weather]);

    const handleOnChange = (event) => {
        setCity(event.target.value);
    };

    const fetchData = async () => {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
        try {
            let response = await fetch(url);
            let output = await response.json();
            if (response.ok) {
                setWeather(output);
                setError('');
            } else {
                setError('No data found. Please enter a valid city name.');
            }
        } catch (error) {
            setError('An error occurred while fetching the data.');
        }
    };

    const weatherImages = {
        Clear: sunny,
        Clouds: cloudy,
        Rain: rainy,
        Snow: snowy,
        Haze: cloudy,
        Mist: cloudy,
    };

    const backgroundImages = {
    Clear: darkMode ? 'linear-gradient(to right, #1a202c, #2d3748)' : 'linear-gradient(to right, #f3b07c, #fcd283)',
    Clouds: darkMode ? 'linear-gradient(to right, #2d3748, #4a5568)' : 'linear-gradient(to right, #57d6d4, #71eeec)',
    Rain: darkMode ? 'linear-gradient(to right, #2d3748, #4a5568)' : 'linear-gradient(to right, #5bc8fb, #80eaff)',
    Snow: darkMode ? 'linear-gradient(to right, #4a5568, #718096)' : 'linear-gradient(to right, #aff2ff, #fff)',
    Haze: darkMode ? 'linear-gradient(to right, #2d3748, #4a5568)' : 'linear-gradient(to right, #57d6d4, #71eeec)',
    Mist: darkMode ? 'linear-gradient(to right, #2d3748, #4a5568)' : 'linear-gradient(to right, #57d6d4, #71eeec)',
  };

    


    const backgroundImage = weather && weather.weather
        ? backgroundImages[weather.weather[0].main]
        : darkMode
        ? 'linear-gradient(to right, #1a202c, #2d3748)'
        : 'linear-gradient(90deg, rgba(136,0,255,1) 0%, rgba(28,185,218,1) 0%)';

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        // You can also toggle a class on the body or document element to apply global dark mode styles
        document.documentElement.classList.toggle('dark-mode', darkMode);
    };

    return (
        <div className="container" style={{ background: backgroundImage }}>
            <div className="city">
                <button onClick={toggleDarkMode} className="toggle-mode">
                    {darkMode ? <BsSun /> : <BsMoon />}
                </button>
                <input
                    type="text"
                    className="textname"
                    value={city}
                    onChange={handleOnChange}
                    placeholder="Enter any city name"
                />
                <button onClick={fetchData}>
                    <FaSearch />
                </button>
            </div>

            {error && <p className="error-message">{error}</p>}

            {!weather && (
                <div className="initial-cards">
                    <div className="weather-card">
                        <h3>Location</h3>
                        <div className="weather-city">
                            <div className="location">
                                <MdLocationOn />
                            </div>
                            <p>Enter a city to get the weather information</p>
                        </div>
                    </div>
                    <div className="weather-card">
                        <h3>Search for Weather</h3>
                        <p>Use the search bar to find the current weather for any city.</p>
                    </div>
                </div>
            )}

            {weather && weather.weather && (
                <div className="content">
                    <div className="weather-image">
                        <img
                            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
                            alt="weather icon"
                        />
                        <h3 className="desc">{weather.weather[0].description}</h3>
                    </div>

                    <div className="weather-temp">
                        <h2>
                            {weather.main.temp}
                            <span>&deg;C</span>
                        </h2>
                    </div>

                    <div className="weather-city">
                        <div className="location">
                            
                        </div>
                        <p style={{ marginLeft: '5px' }}>
                            {weather.name}, <span style={{ marginLeft: '5px' }}>{weather.sys.country}</span>
                        </p>
                    </div>

                    <div className="date-time-container">
                        <h3 className="date">Date: {date}</h3>
                        <h3 className="time">Time: {time}</h3>
                    </div>

                    <div className="weather-stats">
                        <div className="wind">
                            <div className="wind-icon">
                                <FaWind />
                            </div>
                            <h3 className="wind-speed">
                                {weather.wind.speed}
                                <span> Km/h</span>
                            </h3>
                            <h3 className="wind-heading">Wind Speed</h3>
                        </div>
                        <div className="humidity">
                            <div className="humidity-icon">
                                <WiHumidity />
                            </div>
                            <h3 className="humidity-percent">
                                {weather.main.humidity}
                                <span> %</span>
                            </h3>
                            <h3 className="humidity-heading">Humidity</h3>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Weather;
