// Usage: node tasks.js

//-------------------------------------------------------------------------
// Task 1: getTargetBeer() should return the `name` of the first beer.
// Task 2: getTargetBeer() should return the `brewery` of the first beer.
//-------------------------------------------------------------------------

const getBeers = require('../data')

function getTargetBeer() {
   const beers = getBeers();
   return beers[0].name
}

console.log(getTargetBeer())
