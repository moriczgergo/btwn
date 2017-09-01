var assert = require('assert');
require('./../index');
describe("Number#btwn", function() {
	var i = 17;
	it("checks the number with closed bounds", function() {
		var x = i.btwn(1, 17);
		assert.equal(x, true, 'i.btwn(1,17) is true (i=17)');
	});
	it("checks the number with open bounds", function() {
		var x = i.btwn(1, 17, false);
		assert.equal(x, false, 'i.btwn(1,17, false) is false (i=17)');
	});
	it("throws error if min and max are the same and using open bounds", function() {
		assert.throws(function() {
			var x = i.btwn(17,17,false);
		});
	});
	it("returns false if the number is lower than the bounds", function() {
		var x = i.btwn(19, 27);
		assert.equal(x, false, 'i.btwn(19,27) is false (i=17)');
	});
	it("returns false if the number is higher than the bounds", function() {
		var x = i.btwn(1, 15);
		assert.equal(x, false, 'i.btwn(1,15) is false (i=17)');
	});
});
