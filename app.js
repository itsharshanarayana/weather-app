const request = require('request');
const yargs = require('yargs');

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

// console.log('Actual yargs.argv' + argv);
// Getting address value passed in command prompt
console.log(`Address: ${yargs.argv.a}`);

// Encode command line argument - address
var encodedAddress = encodeURIComponent(yargs.argv.a);
// console.log('Encoded Address: ' + encodedAddress);

// Decoded command line argument - address
var decodedAddress = decodeURIComponent(encodedAddress);
// console.log('Decoded Address: ' + decodedAddress);

// Get the complete URL
var baseURL = 'https://maps.googleapis.com/maps/api/geocode/json?address=';
var url = baseURL + encodedAddress;

console.log('URL: ' + url);

request({
  // url: 'https://maps.googleapis.com/maps/api/geocode/json?address=4%20Royal%20Crest%20dr,%20nashua,%20nh',
  url,
  json: true

  // console.log(url);
}, (error, response, body) => {
  // console.log(JSON.stringify(body, undefined, 2));
  // Using template strings, print formatted address.
  // console.log(`Address: ${body.results[0].formatted_address}`);
  // Getting location object which contains lattitude and longitude of the
  // location.
  // var location = JSON.stringify(body.results[0].geometry.location, undefined, 2);
  // console.log(`Location: ${location}`);
  // Getting latitude for the location.
  if(error){
    console.log('Unable to connect to Google Geocode API servers');
  } else if('ZERO_RESULTS' === body.status){
    console.log('Invalid address. Please correct the address');
  } else if('OK' === body.status){
    console.log('\nAddress details:');
    console.log(`Lattitude: ${body.results[0].geometry.location.lat}`);
    // Getting longitude for the location.
    console.log(`Longitude: ${body.results[0].geometry.location.lng}`);

    // console.log(`Response Status Code: ${response.statusCode}`);
    // console.log('Status Code: ' + response.statusCode);
    // console.log(JSON.stringify(response.request.uri.href,undefined, 2));
    console.log('Response status: ' + body.status);
  }

});
