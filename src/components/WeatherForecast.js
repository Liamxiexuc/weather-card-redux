import React from 'react';

import ForecastRow from './ForecastRow';

function WeatherForecast() {
	return (
		<section class="weather-forecast">
			<div class="forecast__switch">
				<button class="forecast__switch_0 switch-active">5 items</button>
				<button class="forecast__switch_1">10 items</button>
			</div>
			<ForecastRow
				day="Fri"
				high="19 c"
				low="8 c"
				time="10:00"
			/>
			<ForecastRow
				day="Fri"
				high="19 c"
				low="8 c"
				time="13:00"
			/>
			<ForecastRow
				day="Fri"
				high="19 c"
				low="8 c"
				time="16:00"
			/>
		</section>
	);
}

export default WeatherForecast;
