// Import third party modules
const request = require('request');

// Import custom modules

// Variable/Constants declarations
const baseURL = 'https://maps.googleapis.com/maps/api/geocode/json?address=';

// Function declaration - geocodeAddress
/*
  Takes two input parameters - raw address and callback function.
  Raw address is encoded and used for calling geocode api call.
  Once the api call returns, corresponding values are set in call back arguments.
*/
var geocodeAddress = (raw_address, callback) => {
  const url = baseURL + encodeURIComponent(raw_address);

  // Result to be passed to the calling routine
  var my_result = {};

  // Call to google geocode apis
  request({
    url,
    json: true
  }, (error, response, body) => {

    if(error){
      // console.log('Unable to connect to Google Geocode API servers');
      callback('Unable to connect to Google Geocode API servers');
    } else if('ZERO_RESULTS' === body.status){
      // console.log('Invalid address. Please correct the address');
      callback('Invalid address. Please correct the address');
    } else if('OK' === body.status){
      callback(undefined, {
        address: body.results[0].formatted_address,
        latitude: body.results[0].geometry.location.lat,
        longitude: body.results[0].geometry.location.lng
      });
    }
  });
}; // End of geocodeAddress

// Expose function geocodeAddress so that it is visible to the calling modules
module.exports = {
  geocodeAddress
};
