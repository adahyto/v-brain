const vegan = require('./d-vegan')
const carnist = require('./d-carnist')

const foods = [
  ...vegan,
  ...carnist
];

module.exports = foods
