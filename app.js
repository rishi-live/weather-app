const request = require("request");
const geocode = require('./utils/geocode');

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

geocode('Boston', (error, data) => {
    console.log('Error', error);
    console.log('Data', data);
});

forecast(-75.7088, 44.1545, (error, data) => {
    console.log('Error', error);
    console.log('Data', data);
})