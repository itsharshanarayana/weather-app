// Import third part modules
const yargs = require('yargs');

// Import custom modules
const geocode = require('./geocode/geocode.js');

// Variables/Constant declarations
const argv = yargs
  .options({
    a: {
        demand: true,
        alias: 'address',
        describe: 'Address to fetch weather for',
        string: true
    }
  })
  .help()
  .alias('help', 'h')
  .argv;


geocode.geocodeAddress(yargs.argv.a);
