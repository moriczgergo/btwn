var assert = require('assert');
var btwn = require('./../index');
describe("BoundDate", function(){
	it("correctly creates a bounddate from a date", function(){
		var d = new Date(2017, 0, 1, 9, 00, 00, 00);
		var bd = new btwn.BoundDate(d, true, false, true, false, true, false, false);
		assert.equal(bd.year, d.getFullYear());
		assert.equal(bd.month, null);
		assert.equal(bd.day, d.getDate());
		assert.equal(bd.hours, null);
		assert.equal(bd.minutes, d.getMinutes());
		assert.equal(bd.seconds, null);
		assert.equal(bd.ms, null);
		bd = new btwn.BoundDate(d, true, true, true, true, true, true, true);
		assert.equal(bd.year, d.getFullYear());
		assert.equal(bd.month, d.getMonth());
		assert.equal(bd.day, d.getDate());
		assert.equal(bd.hours, d.getHours());
		assert.equal(bd.minutes, d.getMinutes());
		assert.equal(bd.seconds, d.getSeconds());
		assert.equal(bd.ms, d.getMilliseconds());
		bd = new btwn.BoundDate(d, false, false, false, false, false, false, false);
		assert.equal(bd.year, null);
		assert.equal(bd.month, null);
		assert.equal(bd.day, null);
		assert.equal(bd.hours, null);
		assert.equal(bd.minutes, null);
		assert.equal(bd.seconds, null);
		assert.equal(bd.ms, null);
	});
	it("assumes ms is false by default in the constructor", function(){
		var d = new Date(2017, 0, 1, 9, 00, 00, 00);
		var bd = new btwn.BoundDate(d, true, false, true, false, true, false);
		assert.equal(bd.ms, null);
	});
});
describe("Number#btwn", function() {
	var i = 17;
	it("checks the number with inclusive bounds", function() {
		var x = i.btwn(1, 17);
		assert.equal(x, true, 'i.btwn(1,17) is true (i=17)');
	});
	it("checks the number with exclusive bounds", function() {
		var x = i.btwn(1, 17, false);
		assert.equal(x, false, 'i.btwn(1,17, false) is false (i=17)');
	});
	it("throws error if min and max are the same and using exclusive bounds", function() {
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
describe("Date#btwn", function() {
	var min = new btwn.BoundDate(new Date(2017, 00, 01, 09, 00, 00, 00), false, false, false, true, true, false, false);
	var max = new btwn.BoundDate(new Date(2017, 00, 01, 09, 59, 59, 00), false, false, false, true, true, true, false);
	it("checks the date with inclusive bounds", function() {
		var d = new Date(2017, 00, 01, 09, 59, 59, 00);
		var x = d.btwn(min, max);
		var y = d.btwn(min, max, true);
		assert.equal(x, true);
		assert.equal(y, true);
	});
	it("checks the date with exclusive bounds", function() {
		var d = new Date(2017, 00, 01, 09, 59, 59, 00);
		var x = d.btwn(min, max, false);
		assert.equal(x, false);
	});
	it("returns false if the date is lower than the bounds", function() {
		var d = new Date(2017, 00, 01, 08, 59, 59, 00);
		var x = d.btwn(min, max);
		assert.equal(x, false);
	});
	it("returns false if the date is higher than the bounds", function() {
		var d = new Date(2017, 00, 01, 10, 00, 00, 00);
		var x = d.btwn(min, max);
		assert.equal(x, false);
	});
});