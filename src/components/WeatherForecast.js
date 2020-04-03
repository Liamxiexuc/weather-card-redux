import React from "react";
import axios from "axios";
import { format } from "date-fns";

import ForecastRow from "./ForecastRow";

class WeatherForecast extends React.Component {


  render() {
    const { limit, unit, forecasts, changeLimit } =this.props;

    return (
      <section class="weather-forecast">
        <div class="forecast__switch">
          <button
            className={`forecast__switch_0 ${
              limit === 5 ? "switch-active" : ""
            }`}
            onClick={() => changeLimit(5)}
          >
            5 items
          </button>
          <button
            className={`forecast__switch_1 ${
              limit === 10 ? "switch-active" : ""
            }`}
            onClick={() => changeLimit(10)}
          >
            10 items
          </button>
        </div>
        {forecasts.map(forecast => {
            const date = new Date(forecast.time * 1000);
            const day = format(date, "EEE");
            const time = format(date, "HH:mm");
            return (
          <ForecastRow
            key={forecast.day + forecast.time}
            day={day}
            high={unit === "c" ? forecast.maxCelsius : forecast.maxFahrenheit}
            low={unit === "c" ? forecast.minCelsius : forecast.minFahrenheit}
            time={time}
            unit={unit}
          />)
  })}
      </section>
    );
  }
}

export default WeatherForecast;
