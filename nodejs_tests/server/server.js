const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
	res.send('Test');
})

app.get('/err', (req, res) => {
	res
		.status(404)
		.send({
			error: 'Page Not Found!'
		});
})


app.listen(port, () => {
	console.log(`Server listening on port: ${port}`);
});

module.exports.app = app;
