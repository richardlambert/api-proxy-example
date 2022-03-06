# API Proxy Example

1. `cd api-proxy-example`
2. `npm i`
3. `touch .env`
4. Create environment variables in `.env` for:
   1. `DEFAULT_LOCATION` - A default location to use when first calling API
   2. `OPEN_WEATHER_API_KEY` - Your OpenWeather API key
   3. `PORT` - Application port
5. `npm run dev`
6. Browse `http://localhost:<PORT>/weather/current`
