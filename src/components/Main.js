import React from 'react';

import WeatherCondition from './WeatherCondition';
import WeatherForecast from './WeatherForecast';

function Main(props) {
	return (
    <main>
      <WeatherCondition
        city={props.city}
        current={props.current}
        unit={props.unit}
      />
      <WeatherForecast
        forecasts={props.forecasts}
        changeLimit={props.changeLimit}
        limit={props.limit}
        unit={props.unit}
      />
    </main>
  );
}

export default Main;
