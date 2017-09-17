// Import third part modules
const yargs = require('yargs');

// Import custom modules
const geocode = require('./geocode/geocode.js');
const weather = require('./weather/weather.js');

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

// Call geocodeAddress function from geocode module
geocode.geocodeAddress(argv.address, (errorMessage, results) => {
  if(errorMessage){
    console.log(errorMessage);
  } else{
    // Get current temperature of the location
    weather.getCurrentTemperatureDetails(results.latitude, results.longitude, (fc_errorMessage, fc_results) => {
      if(fc_errorMessage){
        console.log(fc_errorMessage);
      }else{
        console.log('Location and temperature details:');
        console.log(`Latitude: ${fc_results.latitude}, Longitude: ${fc_results.longitude}`);
        console.log(`Temperature: ${fc_results.temperature}, ApparentTemperature: ${fc_results.apparentTemperature}`);
      }
    });
  }
});

// console.log('Before calling: Latitude: ' + latitude + ', Longitude: ' + longitude);
