const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=9ace7eed66082bb877bdaf211241475b&query=' + latitude + ',' + longitude + '&units=f';
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect', undefined);
        } else if (body.error) {
            callback('Unable to find location', undefined);
        } else {
            //console.log();
            callback(undefined, body.current.weather_descriptions[0] + ' It is currently ' + body.current.temperature + ' degree out. It feels like ' +
                body.current.feelslike + ' degree out. The humidity is ' + body.current.humidity + ' %.');
        }
    })

}

module.exports = forecast