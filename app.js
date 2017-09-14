const request = require('request');

request({
  url: 'https://maps.googleapis.com/maps/api/geocode/json?address=4%20Royal%20Crest%20dr,%20nashua,%20nh',
  json: true
}, (error, response, body) => {
  // console.log(JSON.stringify(body, undefined, 2));
  console.log(`Address: ${body.results[0].formatted_address}`);
});
