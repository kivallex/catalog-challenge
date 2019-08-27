// server side
// this is where all the api stuff happens
const axios = require('axios');

module.exports = app => {
  // we have to get list of currencies with their exchange rates
  // must show certain currency rates depending on base and date
  // get all the currencies
  app.get('/api/rates', async (req, res) => {
    var base = req.query.base;
    var date = req.query.date;

    var response = await axios.get(
      'https://api.ratesapi.io/api/' + date + '?base=' + base
    );

    res.json({ rates: response.data.rates });
  });
};
