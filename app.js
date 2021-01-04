const request = require("request");
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

// const url = "http://api.weatherstack.com/current?access_key=9ace7eed66082bb877bdaf211241475b&query=37.8267,-122.4233";

// request({ url: url }, (error, response) => {
//     if (error) {
//         console.log("Error !!!");
//     } else {
//         const data = JSON.parse(response.body);
//         console.log(data.current);
//     }
// })

// const geocodeURL = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoicmlzaGkxMTEiLCJhIjoiY2tqZ29hcDlhNGNxYjJzcGtkcjZuOHZmZCJ9.oWmeR30cfJ48G2nsDug-9g&limit=1";

// request({ url: geocodeURL, json: true }, (error, response) => {
//     //const data = JSON.parse(response.body.features[geometry.coordinates]);
//     const latitude = response.body.features[0].center[1]
//     const longitude = response.body.features[0].center[0]
//     console.log(latitude, longitude);
// })

const address = process.argv[2];

if (!address) {
    console.log("Please provide a valid address");
} else {
    geocode(address, (error, data) => {
        if (error) {
            return console.log(error);
        }
        // console.log('Error = ', error);
        // console.log('Data = ', data);

        forecast(data.latitude, data.longitude, (error, forecastData) => {
            if (error) {
                return console.log(error);
            }

            console.log(data.location);
            console.log(forecastData);

            // console.log('Error = ', error);
            // console.log('Data = ', data);
        })
    });
}
//console.log(process.argv);