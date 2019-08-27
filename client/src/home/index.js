import React from 'react';
import axios from 'axios';
import moment from 'moment';

const currencies = [
  'GBP',
  'HKD',
  'IDR',
  'ILS',
  'DKK',
  'INR',
  'CHF',
  'MXN',
  'CZK',
  'SGD',
  'THB',
  'HRK',
  'MYR',
  'NOK',
  'CNY',
  'BGN',
  'PHP',
  'SEK',
  'PLN',
  'ZAR',
  'CAD',
  'ISK',
  'BRL',
  'RON',
  'NZD',
  'TRY',
  'JPY',
  'RUB',
  'KRW',
  'USD',
  'HUF',
  'AUD'
];

const URL = 'http://localhost:5000/api/rates?date=';

class home extends React.Component {
  constructor(props) {
    super(props);
    // what do i have to display on the home page?
    this.state = {
      // base = USD/GBP
      base: 'USD',
      baseOption: ['USD', 'GBP'],
      rates: [],
      // date = yyyy-dd-mm
      date: new Date().toISOString().slice(0, 10)
    };
  }

  async componentDidMount() {
    // call data right away to client
    const response = await axios.get(
      URL + this.state.date + '&base=' + this.state.base
    );
    const rates = [];
    currencies.forEach(base => {
      // pushing all the exchange rates ex. {USD: 1.2}
      rates.push({ [base]: response.data.rates[base] });
    });
    this.setState({ rates });
  }

  sortAscending = () => {
    const { rates } = this.state;
    // sort depending on the country
    rates.sort((a, b) => {
      const base1 = Object.keys(a)[0];
      const base2 = Object.keys(b)[0];

      return base1.localeCompare(base2);
    });
    this.setState({ rates });
  };

  sortDescending = () => {
    const { rates } = this.state;
    // sorting depending on the country
    rates
      .sort((a, b) => {
        const base1 = Object.keys(a)[0];
        const base2 = Object.keys(b)[0];

        return base1.localeCompare(base2);
      })
      .reverse();
    this.setState({ rates });
  };

  sortLowMax = () => {
    const { rates } = this.state;
    // this has to sort depending on the exchange rate lowest goes first
    rates.sort((a, b) => {
      const value1 = Object.values(a)[0];
      const value2 = Object.values(b)[0];

      return value1 - value2;
    });
    this.setState({ rates });
  };

  sortMaxLow = () => {
    const { rates } = this.state;
    // this has to sort depending on the exchange rate highest rate goes first
    // find how to get rates' exchange rates
    rates
      .sort((a, b) => {
        const value1 = Object.values(a)[0];
        const value2 = Object.values(b)[0];

        return value1 - value2;
      })
      .reverse();
    this.setState({ rates });
  };

  // selecting USD or GBP
  onSelect = async ({ target }) => {
    // need api call as well
    const base = target.value;
    const response = await axios.get(URL + this.state.date + '&base=' + base);

    const rates = [];
    currencies.forEach(base => {
      // pushing all the exchange rates ex. {USD: 1.2}
      rates.push({ [base]: response.data.rates[base] });
    });

    this.setState({
      base,
      rates
    });
  };

  handleSubmitChange = async ({ target }) => {
    // inputting new date
    const date = new Date(target.value).toISOString().slice(0, 10);
    const response = await axios.get(URL + date + '&base=' + this.state.base);

    const rates = [];
    currencies.forEach(base => {
      // pushing all the exchange rates ex. {USD: 1.2}
      rates.push({ [base]: response.data.rates[base] });
    });

    this.setState({
      date,
      rates
    });
  };

  render() {
    return (
      <div>
        <select onChange={this.onSelect}>
          {this.state.baseOption.map(option => (
            <option value={option === this.state.base}>{option}</option>
          ))}
        </select>
        <br></br>
        <input
          type="date"
          value={this.state.date}
          onChange={this.handleSubmitChange}
          max={moment()
            .toISOString()
            .slice(0, 10)}
        />
        <br></br>
        <button onClick={this.sortLowMax}>Low-max Exchange Rate</button>
        <button onClick={this.sortMaxLow}>Max-low Exchange Rate</button>
        <button onClick={this.sortAscending}>Currency name ASC</button>
        <button onClick={this.sortDescending}>Currency name DESC</button>
        <table>
          <tbody>
            <tr>
              <td>Currency</td>
              <td>Exchange Rate</td>
            </tr>
            {console.log(this.state.rates)}
            {this.state.rates.map(item => (
              <tr>
                {console.log(item)}
                <td>{Object.keys(item)[0]}</td>
                <td>{Object.values(item)[0].toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default home;
