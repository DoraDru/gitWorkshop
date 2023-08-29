// Usage: node showAll.js

// Feature: Show a list of all beers in a `${name} (${brewery})` format 
// in the console.

const getBeers = require('./data')

function main() {
  const beers = getBeers()
  beers.forEach(beer => {
    console.log(beer.name)
  })
}

main()

