import React from "react";
import { connect } from "react-redux";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Navigation from "./components/Navigation";
import { fetchDataThunkAction } from "./redux/actions/weatherActions";
import Error from './components/Error';
import Loader from './components/Loader';

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

  renderMain() {
      if (this.props.hasError) return <Error />;
      return <Main />
  }

  render() {
    return (
      <div className="weather-channel__container">
        <Header />
        <Navigation />
        {this.props.isLoadingWeather ? <Loader /> : this.renderMain()}
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
    isLoadingWeather: state.weather.isLoading,
    hasError: !!state.weather.error,  // !! transfer to a boolean
})

const mapDispatchToProps = dispatch => ({
    fetchWeatherData: city => dispatch(fetchDataThunkAction(city)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
