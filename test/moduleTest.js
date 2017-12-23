const assert = require('chai').assert;
const openOrSenior = require('../javascripting/algorithms').openOrSenior;


describe('App', function() {
    it('app should return array', function() {
        assert.deepEqual(openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]]), ['Open', 'Senior', 'Open', 'Senior']);
    });
});