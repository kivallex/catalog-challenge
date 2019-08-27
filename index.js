// server side
const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();

// this is where we send all the data to the internet

const PORT = process.env.PORT || 5000;

// axios.get('https://api.ratesapi.io/api/2019-04-03?base=USD').then(response => {
//   let rate = response.data;

//   console.log(rate);
// });

app.get('/', async function(req, res) {
  // get the date and base according to the user input
  var response = await axios.get(
    'https://api.ratesapi.io/api/2019-04-03?base=USD'
    // + date + "?base=" + base
  );

  // once you get the date and base, send those data
  console.log('hi');

  res.send(response.data);
});

require('./api')(app);

app.listen(PORT);
