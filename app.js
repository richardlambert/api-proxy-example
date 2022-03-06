const express = require('express');
const path = require('path');
const weatherRoute = require('./routes/weather-route');

const app = express();
const port = process.env.PORT || 8080;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

app.use(express.urlencoded({ extended: true }));

app.use('/weather', weatherRoute);

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});
