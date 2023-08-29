// Usage: node tasks.js

//-------------------------------------------------------------------------
// Task 1: getTargetBeer() should return the `name` of the first beer.
// Task 2: getTargetBeer() should return the `brewery` of the first beer.
//-------------------------------------------------------------------------

const getBeers = require('../data')

function getTargetBeer() {
    const result = [];
    const beers = getBeers();
    result.push(beers[0].name, beers[0].brewery);
    return result;
}

console.log(getTargetBeer())
