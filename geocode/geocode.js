// Import third party modules
const request = require('request');

// Import custom modules

// Variable/Constants declarations
const baseURL = 'https://maps.googleapis.com/maps/api/geocode/json?address=';

// Function declaration - geocodeAddress
var geocodeAddress = (raw_address) => {
  console.log('Raw Address: '+ raw_address);
  const url = baseURL + encodeURIComponent(raw_address);
  console.log('Complete URI: ' + url);

  // Result to be passed to the calling routine
  var my_result = {};

  request({
    url,
    json: true
  }, (error, response, body) => {

    if(error){
      console.log('Unable to connect to Google Geocode API servers');
    } else if('ZERO_RESULTS' === body.status){
      console.log('Invalid address. Please correct the address');
    } else if('OK' === body.status){
      my_result.complete_address = body.results[0].formatted_address;
      my_result.latitude = body.results[0].geometry.location.lat;
      my_result.longitude = body.results[0].geometry.location.lng;

      console.log('Result Object: ' + JSON.stringify(my_result, undefined, 2));
    }

  });

}; // End of geocodeAddress

// Expose function geocodeAddress so that it is visible to the calling modules
module.exports = {
  geocodeAddress
};
