const request = require('supertest');
const expect = require('expect');
const app = require('./server').app;

describe('Server', () => {
	describe('GET /', () => {
		it('should respond with the correct status and response', (done) => {
			request(app)
				.get('/')
				.expect(200)
				.expect('Test')
				.end(done);
		});
	});

	describe('GET /err', () => {
		it('should respond with the 404 status and response as error: Page Not Found', (done) => {
			request(app)
				.get('/err')
				.expect(404)
				.expect((res) => {
					expect(res.body).toInclude({error: 'Page Not Found!'});
				})
				.end(done);
		});
	});
});
