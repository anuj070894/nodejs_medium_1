const axios = require('axios');

const getGeocodeLocation = (address) => {
	return new Promise((resolve, reject) => {
		const encodedAddress = encodeURIComponent(address);
		const geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyAd3ukVhebYoRu6Ha_aHGdxhMZP6leclsk`;
		axios.get(geocodeUrl)
			.then((response) => {
				if (response.data.status === 'ZERO_RESULTS') {
					throw new Error('Not a valid address');
				} else {
					resolve({
						address: response.data.results[0].formatted_address,
						lat: response.data.results[0].geometry.location.lat,
						lng: response.data.results[0].geometry.location.lng
					});
				}
			})
			.catch((e) => {
				reject('Google Maps Api ' + e.message);
			});
	});
}

module.exports = {
	getGeocodeLocation
};
