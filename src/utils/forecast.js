const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "https://api.darksky.net/forecast/f32a3c1a6ec358d9b4f42f3f037fb90c/" +
    latitude + ',' +
    longitude +
    "?units=si";
  request({ url, json: true }, (error, {body}) => {
    if (error) {
      callback("Unable to connect to weather service!", undefined);
    } else if (body.error) {
      callback("Unable to find location", undefined);
    } else {
      const temp = body.currently.temperature;
      const rain = body.currently.precipProbability * 100;
      callback(
        undefined,
        body.daily.data[0].summary +
          "It is currently " +
          +temp +
          " degrees out. There is a " +
          rain +
          "% chance of rain."
        
      );
    }
  });
};
module.exports = forecast;
