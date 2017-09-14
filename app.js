const request = require('request');

request({
  url: 'https://maps.googleapis.com/maps/api/geocode/json?address=4%20Royal%20Crest%20dr,%20nashua,%20nh',
  json: true
}, (error, response, body) => {
  // console.log(JSON.stringify(body, undefined, 2));
  // Using template strings, print formatted address.
  console.log(`Address: ${body.results[0].formatted_address}`);
  // Getting location object which contains lattitude and longitude of the
  // location.
  var location = JSON.stringify(body.results[0].geometry.location, undefined, 2);
  console.log(`Location: ${location}`);
  // Getting latitude for the location.
  console.log(`Lattitude: ${body.results[0].geometry.location.lat}`);
  // Getting longitude for the location.
  console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
});
