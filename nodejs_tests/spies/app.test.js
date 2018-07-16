const expect = require('expect');
const rewire = require('rewire');

const app = rewire('./app');

it('should call the method once', () => {
	const spy = expect.createSpy();
	spy();
	expect(spy).toHaveBeenCalled();
});

it('should call db.saveUser when app.signUp is called', () => {
	const db = {
		saveUser: expect.createSpy()
	};
	app.__set__('db', db);
	app.signUp();
	expect(db.saveUser).toHaveBeenCalled();
});
