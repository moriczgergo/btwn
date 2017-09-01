Number.prototype.btwn = function(min, max, closed = true) {
	var n = this.valueOf();
	if (closed) {
		return n >= min && n <= max;
	} else {
		if (min == max) {
			throw new Error("min and max can't be equal.");
		}
		return n > min && n < max;
	}
}
