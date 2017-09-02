# btwn [![npm](https://img.shields.io/npm/v/btwn.svg)]() [![npm](https://img.shields.io/npm/dt/btwn.svg)]() [![Build Status](https://travis-ci.org/moriczgergo/btwn.svg?branch=master)](https://travis-ci.org/moriczgergo/btwn)

Check if a number is in your min-max bounds.

 * Lightweight
 * Builds into the Number prototype
 * 93.3725% code coverage

## Install

```
npm install btwn
```
...or...
```
yarn add btwn
```

## Usage

### Checking a number

```js
var btwn = require('btwn');

var x = 12; // a normal Number type variable

if(x.btwn(1, 13)){
	console.log("This number is under or equals to 13, and greater than or equals to 1.");
} else {
	console.log("This number is under 1 or greater than 13.");
}
```

### Checking a date

```js
var btwn = require('btwn');

// Bounds are 09:00-09:59 (inclusive)
var minDate = new Date(2017, 00, 01, 09, 00, 00, 00);
var maxDate = new Date(2017, 00, 01, 09, 59, 59, 00);
var min = new btwn.BoundDate(minDate, false, false, false, true, true, false, false); //See the usage of these booleans in the docs below
var max = new btwn.BoundDate(maxDate, false, false, false, true, true, true, false); //See the usage of these booleans in the docs below

var d = new Date(); //Current date & time

if(d.btwn(min, max)){
	console.log("It's after 8:59:59 and before 10:00:00!");
} else {
	console.log("It's before 9:00:00 or after 9:59:59.");
}
```
### Use in browser

Download the latest `btwn.js` from [here](https://github.com/moriczgergo/btwn/releases/latest), and follow the instructions above without the `require` line.

## Docs

### BoundDate(date, year, month, day, hours, minutes, seconds, [ms])

 * date - Input date.
 * year - Should the year be included as a bound?
 * month - Should the month be included as a bound?
 * day - Should the day ("date" in the Date object) be included as a bound?
 * hours - Should the hours be included as a bound?
 * minutes - Should the minutes be included as a bound?
 * seconds - Should the seconds be included as a bound?
 * ms - Should the milliseconds be included as a bound? (Default: false)

### Number.btwn(min, max, [inclusive])

 * min - Minimum value.
 * max - Maximum value.
 * inclusive - Are min and max inclusive. (Default: true)

### Date.btwn(min, max, [inclusive])

 * min - Minimum DateBound.
 * max - Maximum DateBound.
 * inclusive - Are min and max inclusive (Default: true)

## To-do

 * [ ] Integrate into dates

## Tests

Run `mocha`.
