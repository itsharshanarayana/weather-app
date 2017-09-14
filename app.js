const request = require('request');

request({
  url: 'https://maps.googleapis.com/maps/api/geocode/json?address=4%20Royal%20Crest%20dr,%20nashua,%20nh',
  json: true
}, (error, response, body) => {
  // console.log(JSON.stringify(body, undefined, 2));
  // Using template strings, print formatted address.
  console.log(`Address: ${body.results[0].formatted_address}`);
  console.log(`Lattitude: ${body.results[0].geometry.location.lat}`);
  console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
});
