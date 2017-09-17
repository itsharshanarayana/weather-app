const request = require('request');

var getCurrentTemperatureDetails = (latitude, longitude, callback) => {
  // console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
  const baseURL = 'https://api.forecast.io/forecast/';
  const apiKey = 'ea91b1962da0879bc282db72a8b918fa';
  const url = baseURL + apiKey + '/' + latitude + ',' + longitude;

  // console.log('Complete Forecast URL: ' + url);
  request({
    url,
    json: true
  }, (error, response, body) => {
    if(error){
      callback('Unable to connect to Forecast API servers');
    } else if (response.statucCode === 400){
      callback('Unable to fetch weather');
    } else if (response.statusCode === 200){
      callback(undefined, {
        latitude,
        longitude,
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
      });
    }
  });
}

// Expose function geocodeAddress so that it is visible to the calling modules
module.exports = {
  getCurrentTemperatureDetails
};
