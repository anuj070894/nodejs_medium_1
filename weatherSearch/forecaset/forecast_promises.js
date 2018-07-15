const axios = require('axios');

const getTemperature = (forecastUrl) => {
	return new Promise((resolve, reject) => {
		axios.get(forecastUrl)
			.then((response) => {
				resolve({
					temperature: response.data.currently.temperature,
					apparentTemperature: response.data.currently.apparentTemperature
				});
			})
			.catch((e) => {
				resolve(e.message);
			});
	});
}

module.exports = {
	getTemperature
};
