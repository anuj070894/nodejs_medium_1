const utils = require('./utils');
const expect = require('expect');

it('should add two values correctly', () => {
    const val = utils.add(3, 5);
	expect(val).toBe(8);
	expect(typeof val).toBe('number');
});

it('should square the number correctly', () => {
    const val = utils.square(3);
	expect(val).toBe(9);
	expect(typeof val).toBe('number');
});

it('should assert array and object inclusion, equality and exclusion correctly', () => {
	expect([1,2,3,4]).toInclude(1);
	expect([1,2]).toEqual([1,2]);
	expect({name: 'Anuj', age: 23}).toEqual({name: 'Anuj', age: 23});
	expect({name: 'Anuj', age: 23}).toInclude({age: 23});
	expect({name: 'Anuj', age: 23}).toExclude({name: 'Ankit'});
});

it('should fill the firstName and lastName correctly', () => {
	const user = {location: 'Surat', age: 25};
	const newUser = utils.enterUserName(user, 'Anuj Kumar');
	expect(newUser).toInclude({firstName: 'Anuj'});
	expect(newUser).toInclude({lastName: 'Kumar'});
});
