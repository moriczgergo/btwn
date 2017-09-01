# btwn
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

```
require('btwn');

var x = 12; // a normal Number type variable

if(x.btwn(1, 13)){
	console.log("This number is under or equals to 13, and greater than or equals to 1.");
} else {
	console.log("This number is under 1 or greater than 13.");
}
```

## Docs

### Number.btwn(min, max, [closed])

 * min - Minimum value.
 * max - Maximum value.
 * closed - Are the bounds closed or not. If this is true, min and max are inclusive. (Default: true)

## Tests

Run `mocha`.
