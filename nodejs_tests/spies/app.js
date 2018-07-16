const db = require('./db');

module.exports.signUp = (email, password) => {
	db.saveUser({email, password});
};
