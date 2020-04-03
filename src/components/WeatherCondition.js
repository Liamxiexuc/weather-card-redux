import React from 'react';

import compass from '../assets/icons/icon-compass.png';
import umberella from '../assets/icons/icon-umberella.png';
import wind from '../assets/icons/icon-wind.png';

function WeatherCondition(props) {
const {
    city,
    current: {
        maxCelsius,
        maxFahrenheit,
        humidity,
        windSpeed,
        windDirection
    },
    unit,
} = props;

	return (
    <section className="weather-condition">
      <div className="weather-condition__location">{city}</div>
      <div className="weather-condition__overview">Clear</div>
      <div className="weather-condition__temp">
        {unit === "c" ? maxCelsius : maxFahrenheit} {unit}{" "}
      </div>
      <div className="weather-condition__desc">
        <div>
          <img src={umberella} />
          <span className="citem">{humidity} %</span>
        </div>
        <div>
          <img src={wind} />
          <span className="citem">{windSpeed} km/h</span>
        </div>
        <div>
          <img src={compass} />
          <span className="citem">{windDirection}</span>
        </div>
      </div>
    </section>
  );
}

export default WeatherCondition;
