// server side
// this is where all the api stuff happens

module.exports = app => {
  // we have to get list of currencies with their exchange rates
  // must show certain currency rates depending on base and date
  // get all the currencies
  app.get('/rate/:', async (req, res) => {
    var base = response.data.base;
    var date = response.data.date;

    var response = await axios.get(
      'https://api.ratesapi.io/api/' + date + '?base=' + base
    );
    // render to
    res.render('');
  });
};
