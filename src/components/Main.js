import React from 'react';

import WeatherCondition from './WeatherCondition';
import WeatherForecast from './WeatherForecast';

function Main(props) {
	return (
    <main>
      <WeatherCondition
        city={props.city}
        minCelsius={props.minCelsius}
        humidity={props.humidity}
        windSpeed={props.windSpeed}
        windDirection={props.windDirection}
      />
      <WeatherForecast
        forecasts={props.forecasts}
        changeLimit={props.changeLimit}
        limit={props.limit}
      />
    </main>
  );
}

export default Main;
