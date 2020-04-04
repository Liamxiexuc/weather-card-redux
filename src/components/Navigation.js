import React from 'react';
import { connect } from 'react-redux';
import { changeUnitAction, changeInputAction } from '../redux/actions/navigationActions';
import { fetchDataThunkAction } from "../redux/actions/weatherActions";

function Navigation(props) {
    const { unit, handleInputChange, toggleUnit, input, fetchWeatherData } = props;
    const handleSearch = () => {
        fetchWeatherData(input);
    }

	return (
    <nav>
      <div>
        <input
          className="search-input"
          onChange={handleInputChange}
          value={input}
        />
        <button className="search-btn" onClick={handleSearch}>
          <i className="fa fa-search" />
        </button>
        <button className="temp-switch" onClick={toggleUnit}>
          <i
            className="fa fa-thermometer-empty temp-switch__icon"
            aria-hidden="true"
          />
          <sup>&deg;</sup>{unit.toUpperCase()}
        </button>
      </div>
    </nav>
  );
}

const mapStateToProps = state => ({
    unit: state.navigation.unit,
    input: state.navigation.input,
})

const mapDispatchToProps = dispatch => ({
    toggleUnit: () => dispatch(changeUnitAction()),
    handleInputChange: event => dispatch(changeInputAction(event)),
    fetchWeatherData: city => dispatch(fetchDataThunkAction(city)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
