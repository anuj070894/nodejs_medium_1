const request = require('request');

const getTemperature = (forecastUrl, callback) => {
	request.get({
		url: forecastUrl,
		json: true
	}, (error, response, body) => {
		if (error) {
			callback('Some error has occured!');
		} else {
			callback(undefined, {
				temperature: body.currently.temperature,
				apparentTemperature: body.currently.apparentTemperature
			});
		}
	}); // need to handle the case when we have to abort the request in some time.
}

module.exports = {
	getTemperature
};
