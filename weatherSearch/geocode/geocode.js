const request = require('request');

const getGeocodeLocation = (address, callback) => {
	const encodedAddress = encodeURIComponent(address);
	const geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyAd3ukVhebYoRu6Ha_aHGdxhMZP6leclsk`;
	request.get({
		url: geocodeUrl,
		json: true
	}, (error, response, body) => {
		if (!error && response.statusCode === 200) {
			callback(undefined, {
				address: body.results[0].formatted_address,
				lat: body.results[0].geometry.location.lat,
				lng: body.results[0].geometry.location.lng
			});
		} else {
			callback('Error has occured!!!');
		}
	});
}

module.exports = {
	getGeocodeLocation
};
