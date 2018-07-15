const express = require('express');
const hbs = require('hbs');
const app = express();

app.set('view engine', 'hbs'); // set express related configurations. key -> value pairs

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
	res.render('home.hbs', {
		titlePage: 'Home Page',
		contentHeader: 'Home Page',
		contentBody: 'Welcome to the Portfolio Website',
		currentYear: new Date().getFullYear()
	});
});

app.get('/help', (req, res) => {
	res.render('help.html');
});

app.get('/about', (req, res) => {
	res.render('about.hbs', {
		titlePage: 'About Page',
		contentHeader: 'About Page',
		contentBody: 'This is a Portfolio Website',
		currentYear: new Date().getFullYear()
	});
});

app.listen(3000, () => {
	console.log('Listening on port 3000');
});
