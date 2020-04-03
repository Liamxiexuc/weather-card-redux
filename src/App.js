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
      current: {},
      input: "",
      unit: "c"
    };
  }

  componentDidMount() {
    //fetch data
    getWeatherFor("brisbane").then(this.updateWeather);
  }

  toggleUnit = () => {
    this.setState(state => ({ unit: this.state.unit === "c" ? "f" : "c" }));
  };

  changeLimit = limit => {
    this.setState({ limit });
  };

  handleInputChange = event => {
    this.setState({ input: event.target.value });
  };

  updateWeather = res => {
    const city = res.data.data.city.name;
    const current = res.data.data.current;
    const forecasts = res.data.data.forecast;
    this.setState({
      forecasts,
      city,
      current,
    });
  };

  handleSearch = () => {
    getWeatherFor(this.state.input).then(this.updateWeather);
  };

  render() {
    return (
      <div className="weather-channel__container">
        <Header />
        <Navigation
          input={this.state.input}
          handleInputChange={this.handleInputChange}
          handleSearch={this.handleSearch}
          toggleUnit={this.toggleUnit}
          unit={this.state.unit}
        />
        <Main
          forecasts={this.state.forecasts.slice(0, this.state.limit)}
          changeLimit={this.changeLimit}
          limit={this.state.limit}
          city={this.state.city}
          current={this.state.current}
          unit={this.state.unit}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
