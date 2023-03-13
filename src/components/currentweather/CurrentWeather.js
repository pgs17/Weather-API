import "./currentweather.css";

import React from 'react'

const CurrentWeather = () => {
  return (
    <div className="weather">
        <div className="top">
            <div>
            <p className="CityName">BELGIUM</p>
            <p className="Weatherdescription">SUNNY</p>
        </div>
        <img src="icons/01d.png" alt="weather" className="weathericon" />
    </div>
    <div className="bottom">
        <p className="temperature">22°C</p>
        <div className="details">
          <div className="parameter-row">
            <span className="labels">Details</span>
          </div>
          <div className="parameter-row">
            <span className="label">Feels like</span>
            <span className="value">
              10°C
            </span>
          </div>
          <div className="parameter-row">
            <span className="label">Wind</span>
            <span className="value">25 m/s</span>
          </div>
          <div className="parameter-row">
            <span className="label">Humidity</span>
            <span className="value">69%</span>
          </div>
          <div className="parameter-row">
            <span className="label">Pressure</span>
            <span className="value">58 hPa</span>
          </div>
        </div>
    </div>
    </div>
  )
}
export default CurrentWeather;    
        
