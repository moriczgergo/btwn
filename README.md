# btwn [![npm](https://img.shields.io/npm/v/btwn.svg)]() [![npm](https://img.shields.io/npm/dt/btwn.svg)]() [![Build Status](https://travis-ci.org/moriczgergo/btwn.svg?branch=master)](https://travis-ci.org/moriczgergo/btwn)

Check if a number is in your min-max bounds.

 * Lightweight
 * Builds into the Number prototype
 * 100% code coverage

## Install

```
npm install btwn
```
...or...
```
yarn add btwn
```

## Usage

```js
require('btwn');

var x = 12; // a normal Number type variable

if(x.btwn(1, 13)){
	console.log("This number is under or equals to 13, and greater than or equals to 1.");
} else {
	console.log("This number is under 1 or greater than 13.");
}
```

## Docs

### Number.btwn(min, max, [inclusive])

 * min - Minimum value.
 * max - Maximum value.
 * inclusive - Are min and max inclusive. (Default: true)

## To-do

 * [ ] Integrate into dates

## Tests

Run `mocha`.
