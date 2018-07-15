const request = require('request');
const yargs = require('yargs');
const geocode = require('./geocode/geocode');
const forecast = require('./forecaset/forecast');

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

geocode.getGeocodeLocation(argv.address, (errorMessage, result) => {
	if (errorMessage) {
		console.log(errorMessage);
	} else {
		console.log('Address: ', result.address);
		forecast.getTemperature(`https://api.darksky.net/forecast/bac29fd09cdfa8df656233e69d00e531/${result.lat},${result.lng}`, (errorMessage, result) => {
			if (errorMessage) {
				console.log('Forecase Error has occured!!!');
			} else {
				console.log('Temperature: ', result.temperature);
				console.log('But it feels like: ', result.apparentTemperature);
			}
		});
	}
});
