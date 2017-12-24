const assert = require('chai').assert;
const app = require('../javascripting/algorithms');


describe('App', function() {
    it('the app should return a string value', function() {
        assert.equal(app.goodVsEvil('1 1 1 1 1 1', '1 1 1 1 1 1 1'), 'Battle Result: Evil eradicates all trace of Good');
    });
    it('the app should return a string value', function() {
    assert.equal(app.goodVsEvil('0 0 0 0 0 10', '0 1 1 1 1 0 0'), 'Battle Result: Good triumphs over Evil');
    });
});