const glasness  = require('./d-glasness')
const sad    = require('./d-sadness')
const scared = require('./d-scared')

const moods = [
  ...glasness,
  ...scared,
  ...sadness
];

module.exports = moods
