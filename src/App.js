import React from "react";
import { connect } from "react-redux";
import { format } from "date-fns";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Navigation from "./components/Navigation";
import { getWeatherFor } from "./utils/axios";
import { fetchDataThunkAction } from "./redux/weatherActions";

import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "",
      unit: "c",
    };
  }

  componentDidMount() {
    //fetch data
    this.props.fetchWeatherData('Hobart');
  }

  toggleUnit = () => {
    this.setState(state => ({ unit: this.state.unit === "c" ? "f" : "c" }));
  };

  handleInputChange = event => {
    this.setState({ input: event.target.value });
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
          unit={this.state.unit}
        />
        <Footer />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
    fetchWeatherData: city => dispatch(fetchDataThunkAction(city)),
})

export default connect(null, mapDispatchToProps)(App);
