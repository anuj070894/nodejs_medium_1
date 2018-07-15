const fs = require('fs');
const express = require('express');
const hbs = require('hbs');
const app = express();

const port = process.env.PORT || 3000;

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs'); // set express related configurations. key -> value pairs

hbs.registerHelper('getCurrentYear', () => {
	return new Date().getFullYear();
});

hbs.registerHelper('screamIt', (text) => {
	return text.toUpperCase();
});

app.use((req, res, next) => {
	const currentTime = new Date().toString();
	const log = `${currentTime}: ${req.method} - ${req.originalUrl}`;
	fs.appendFile('server.log', log + "\n", (error) => {
		if (error) {
			console.log('Some error has happened while opening the file!!!');
		}
	});
	next();
});

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
	res.render('home.hbs', {
		titlePage: 'Home Page',
		contentHeader: 'Home Page',
		contentBody: 'Welcome to the Portfolio Website',
		welcomeMessage: 'Hello User!!!'
	});
});

app.get('/help', (req, res) => {
	res.render('help.html');
});

app.get('/about', (req, res) => {
	res.render('about.hbs', {
		titlePage: 'About Page',
		contentHeader: 'About Page',
		contentBody: 'This is a Portfolio Website'
	});
});

app.get('/projects', (req, res) => {
	res.render('projects.hbs', {
		titlePage: 'Projects Page',
		contentHeader: 'Projects Page',
		contentBody: 'My Projects'
	});
});

app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});
