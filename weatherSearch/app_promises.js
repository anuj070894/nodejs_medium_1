const axios = require('axios');
const yargs = require('yargs');
const geocode = require('./geocode/geocode_promises');
const forecast = require('./forecaset/forecast_promises');

const argv = yargs
	.options({
		a: {
			describe: 'Put your address here',
			string: true,
			alias: 'address',
			demand: true
		}
	})
	.alias('help', 'h')
	.help()
	.argv;

const encodedAddress = encodeURIComponent(argv.address);
const geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyAd3ukVhebYoRu6Ha_aHGdxhMZP6leclsk`;

geocode.getGeocodeLocation(argv.address)
	.then((result) => {
		const forecastUrl = `https://api.darksky.net/forecast/bac29fd09cdfa8df656233e69d00e531/${result.lat},${result.lng}`;
		return forecast.getTemperature(forecastUrl);
	})
	.then((result) => {
		console.log('Temperature: ', result.temperature);
		console.log('But it feels like: ', result.apparentTemperature);
	})
	.catch((e) => {
		console.log(e);
	});
// axios.get(geocodeUrl)
// 	.then((response) => {
// 		if (response.data.statusCode === 200) {
// 			return Promise.resolve({
// 				address: response.data.results[0].formatted_address,
// 				lat: response.data.results[0].geometry.location.lat,
// 				lng: response.data.results[0].geometry.location.lng
// 			});
// 		} else if (response.data.status === 'ZERO_RESULTS') {
// 			throw new Error('No results has been found');
// 		} else {
// 			throw new Error('Some error has occured with gmaps api');
// 		}
// 	})
// 	.then(() => {

// 	})
// 	.catch((e) => {
// 		console.log(e.message);
// 	});
// geocode.getGeocodeLocation(argv.address, (errorMessage, result) => {
// 	if (errorMessage) {
// 		console.log(errorMessage);
// 	} else {
// 		console.log('Address: ', result.address);
// 		forecast.getTemperature(`https://api.darksky.net/forecast/bac29fd09cdfa8df656233e69d00e531/${result.lat},${result.lng}`, (errorMessage, result) => {
// 			if (errorMessage) {
// 				console.log('Forecase Error has occured!!!');
// 			} else {
// 				console.log('Temperature: ', result.temperature);
// 				console.log('But it feels like: ', result.apparentTemperature);
// 			}
// 		});
// 	}
// });
