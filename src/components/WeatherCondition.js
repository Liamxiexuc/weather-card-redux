import React from 'react';

import compass from '../assets/icons/icon-compass.png';
import umberella from '../assets/icons/icon-umberella.png';
import wind from '../assets/icons/icon-wind.png';

function WeatherCondition(props) {
	return (
    <section className="weather-condition">
      <div className="weather-condition__location">{props.city}</div>
      <div className="weather-condition__overview">Clear</div>
      <div className="weather-condition__temp">{props.minCelsius}</div>
      <div className="weather-condition__desc">
        <div>
          <img src={umberella} />
          <span className="citem">{props.humidity} %</span>
        </div>
        <div>
          <img src={wind} />
          <span className="citem">{props.windSpeed} km/h</span>
        </div>
        <div>
          <img src={compass} />
          <span className="citem">{props.windDirection}</span>
        </div>
      </div>
    </section>
  );
}

export default WeatherCondition;
