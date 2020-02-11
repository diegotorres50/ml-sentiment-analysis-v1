const glasness  = require('./d-gladness')
const sadness    = require('./d-sadness')
const angry    = require('./d-angry')
const scared = require('./d-scared')

const moods = [
  ...glasness,
  ...scared,
  ...angry,
  ...sadness
];

module.exports = moods
