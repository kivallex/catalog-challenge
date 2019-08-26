// server side
const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();

// this is where we send all the data to the internet

const PORT = process.env.PORT || 5000;

axios.get('https://api.ratesapi.io/api/2019-04-03?base=USD').then(response => {
  let rate = response.data;

  console.log(rate);
});

app.get('/api/currencies', async (req, res) => {
  const currencies = req.query.currencies;
  const currency = {
    // make sure the rate is displaying up to 2 decimal points
    rate: req.query.rate.toFixed(2)
  };
  res.send(currencies);
});

require('./api')(app);

app.listen(PORT);

app.get('/', function(req, res) {
  res.send('Hello World!');
});

app.listen(3000, function() {
  console.log('Server is running on port 3000!');
});
