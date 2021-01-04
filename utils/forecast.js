const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=9ace7eed66082bb877bdaf211241475b&query=' + latitude + ',' + longitude + '&units=f';
    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect', undefined);
        } else if (response.body.error) {
            callback('Unable to find location', undefined);
        } else {
            //console.log();
            callback(undefined, response.body.current.weather_descriptions);
        }
    })

}

module.exports = forecast