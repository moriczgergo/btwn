/**
 * Represents a new BoundDate.
 * @constructor
 * @param {Date} date Input Date
 * @param {boolean} year Should the year be included as a bound?
 * @param {boolean} month Should the month be included as a bound?
 * @param {boolean} day Should the day ("date" in the Date object) be included as a bound?
 * @param {boolean} hours Should the hours be included as a bound?
 * @param {boolean} minutes Should the minutes be included as a bound?
 * @param {boolean} seconds Should the seconds be included as a bound?
 * @param {boolean} [ms=true] Should the milliseconds be included as a bound?
 * @returns {BoundDate}
 */
function BoundDate(date, year, month, day, hours, minutes, seconds, ms = false) {
	if (year){
		this.year = date.getFullYear();
	} else {
		this.year = null;
	}
	if (month){
		this.month = date.getMonth();
	} else {
		this.month = null;
	}
	if (day){
		this.day = date.getDate();
	} else {
		this.day = null;
	}
	if (hours){
		this.hours = date.getHours();
	} else {
		this.hours = null;
	}
	if (minutes){
		this.minutes = date.getMinutes();
	} else {
		this.minutes = null;
	}
	if (seconds){
		this.seconds = date.getSeconds();
	} else {
		this.seconds = null;
	}
	if (ms){
		this.ms = date.getMilliseconds();
	} else {
		this.ms = null;
	}
}

/**
 * Checks if the number is in the specified bound or not
 * @param {Number} min The lower bound number
 * @param {Number} max The higher bound number
 * @param {boolean} [inclusive=true] Should the bounds be inclusive?
 * @returns {boolean} Is the number in bound?
 */
Number.prototype.btwn = function(min, max, inclusive = true) {
	var n = this.valueOf();
	if (inclusive) {
		return n >= min && n <= max;
	} else {
		if (min == max) {
			throw new Error("min and max can't be equal.");
		}
		return n > min && n < max;
	}
}

/**
 * Checks if the date is in the specified bound or not
 * @param {BoundDate} min The lower bound date
 * @param {BoundDate} max The higher bound date
 * @param {boolean} [inclusive=true] Should the bounds be inclusive?
 * @returns {boolean} Is the date in bound?
 */
Date.prototype.btwn = function(min, max, inclusive = true) {
	if (inclusive) {		
		return ((this.getFullYear() >= min.year || min.year == null) && (this.getFullYear() <= max.year || max.year == null)) && ((this.getMonth() >= min.month || min.month == null) && (this.getMonth() <= max.month || max.month == null)) && ((this.getDate() >= min.day || min.day == null) && (this.getDate() <= max.day || max.day == null)) && ((this.getHours() >= min.hours || min.hours == null) && (this.getHours() <= max.hours || max.hours == null)) && ((this.getMinutes() >= min.minutes || min.minutes == null) && (this.getMinutes() <= max.minutes || max.minutes == null)) && ((this.getSeconds() >= min.seconds || min.seconds == null) && (this.getSeconds() <= max.seconds || max.seconds == null)) && ((this.getMilliseconds() >= min.ms || min.ms == null) && (this.getMilliseconds() <= max.ms || max.ms == null));
	} else {
		return ((this.getFullYear() == min.year || min.year == null) && (this.getFullYear() == max.year || max.year == null)) && ((this.getMonth() == min.month || min.month == null) && (this.getMonth() == max.month || max.month == null)) && ((this.getDate() == min.day || min.day == null) && (this.getDate() == max.day || max.day == null)) && ((this.getHours() == min.hours || min.hours == null) && (this.getHours() == max.hours || max.hours == null)) && ((this.getMinutes() == min.minutes || min.minutes == null) && (this.getMinutes() == max.minutes || max.minutes == null)) && ((this.getSeconds() == min.seconds || min.seconds == null) && (this.getSeconds() == max.seconds || max.seconds == null)) && ((this.getMilliseconds() == min.ms || min.ms == null) && (this.getMilliseconds() == max.ms || max.ms == null));
	}
}

module.exports.BoundDate = BoundDate;