const axios = require('axios');

const getCurrentWeatherPage = async (req, res, next) => {
  try {
    const { location = process.env.DEFAULT_LOCATION } = req.query;
    const apiKey = process.env.OPEN_WEATHER_API_KEY;
    const geoApi = `http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=5&appid=${apiKey}`;
    const { data: geoData } = await axios.get(geoApi);
    const { lat, lon } = geoData[0];
    const weatherApi = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
    const { data: weatherData } = await axios.get(weatherApi);
    return res.render('weather/current', { weatherData });
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  getCurrentWeatherPage,
};
