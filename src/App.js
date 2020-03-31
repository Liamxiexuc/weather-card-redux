import React from "react";
import { format } from "date-fns";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Navigation from "./components/Navigation";
import { getWeatherFor } from "./utils/axios";

import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      forecasts: [],
      limit: 5,
      city: "",
      minCelsius: "",
      humidity: "",
      windSpeed: "",
      windDirection: "",
      input: ""
    };
  }

  componentDidMount() {
    //fetch data
    getWeatherFor("brisbane").then(response => {
      const city = response.data.data.city.name;
      const {
        minCelsius,
        humidity,
        windSpeed,
        windDirection
      } = response.data.data.current;

      const forecasts = response.data.data.forecast
        .slice(0, 10)
        .map(forecast => {
          const date = new Date(forecast.time * 1000);
          const day = format(date, "EEE");
          const time = format(date, "HH:mm");

          return {
            day,
            time,
            high: forecast.maxCelsius,
            low: forecast.minCelsius
          };
        });
      this.setState({
        forecasts,
        city,
        minCelsius,
        humidity,
        windSpeed,
        windDirection
      });
    });
  }

  changeLimit = limit => {
    this.setState({ limit });
  };

  handleInputChange = event => {
    this.setState({ input: event.target.value });
  };

  render() {
    return (
      <div className="weather-channel__container">
        <Header />
        <Navigation
          input={this.state.input}
          handleInputChange={this.handleInputChange}
        />
        <Main
          forecasts={this.state.forecasts.slice(0, this.state.limit)}
          changeLimit={this.changeLimit}
          limit={this.state.limit}
          city={this.state.city}
          minCelsius={this.state.minCelsius}
          humidity={this.state.humidity}
          windSpeed={this.state.windSpeed}
          windDirection={this.state.windDirection}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
