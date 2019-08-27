import React from 'react';

class Sort extends React.Component {
  state = {
    rates: {}
  };

  componentDidMount() {
    const { rates } = this.state;
  }

  sortAscending = () => {
    const { rates } = this.state;
    // sort depending on the country
    rates.sort();
    this.setState({ rates });
  };

  sortDescending = () => {
    const { rates } = this.state;
    // sorting depending on the country
    rates.sort().reverse();
    this.setState({ rates });
  };

  sortLowMax = () => {
    const { rates } = this.state;
    // this has to sort depending on the exchange rate lowest goes first
    rates.sort();
    this.setState({ rates });
  };

  sortMaxLow = () => {
    const { rates } = this.state;
    // this has to sort depending on the exchange rate highest rate goes first
    // find how to get rates' exchange rates
    rates.sort().reverse();
    this.setState({ rates });
  };

  render() {
    // have set rates so you can display the rates
    const { rates } = this.state;
    return (
      <div>
        <table>
          <tr>
            <td>Currency</td>
            <td>Exchange Rate</td>
          </tr>
          {rates.map((post, index) => (
            <tr>
              <td>{index}</td>
              <td>{post}</td>
            </tr>
          ))}
        </table>
        <button onClick={this.sortLowMax}>Low-max Exchange Rate</button>
        <button onClick={this.sortMaxLow}>Max-low Exchange Rate</button>
        <button onClick={this.sortAscending}>Currency name ASC</button>
        <button onClick={this.sortDescending}>Currency name DESC</button>
      </div>
    );
  }
}
