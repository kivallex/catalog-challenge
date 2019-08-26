import React from 'react';
import Dropdown from 'react-dropdown';

class home extends React.Component {
  constructor(props) {
    super(props);
    // what do i have to display on the home page?
    this.state = {
      // base = USD/GBP
      base: '',
      baseOption: ['USD', 'GBP'],
      // date = yyyy-dd-mm
      date: ''
    };
    this.onSelect = this.onSelect.bind(this);
    this.handleSubmitChange = this.handleChange.bind(this);
  }

  async onSelect(base) {
    this.setState({
      ...this.state,
      base: base.value
    });
  }

  handleSubmitChange = ({ target }) => {
    this.setState({
      date: target.value
    });
  };

  submitData = async () => {
    const base = this.state.base;
    const date = this.state.date;

    postNewRate({});
  };

  // this function is needed so base and date changes
  // handleSubmit = e => {
  //   e.preventDefault(); this prevents your browser from reloading
  //   const base = this.state.base;
  //   const date = this.state.date;

  //   update base and date
  // };

  render() {
    // render and display two things:
    // two inputs are needed: date (yyyy-dd-mm) and base (GBP or USD)
    // base and date has to change depending on the user inputs
    // let base = this.state.base;
    // let date = this.state.date;

    // display three things
    // option to choose either GBP or USD
    // input box for user to input certain date
    // submit button
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <Dropdown
            options={this.state.baseOption}
            onChange={this.onSelect}
            value={this.state.base}
            placeholder="Select base currency"
          />
          <input
            type="date"
            value={this.state.date}
            onChange={this.handleSubmitChange}
            placeholder="yyyy-dd-mm"
            required
            pattern="(?:19|20)[0-9]{2}-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))-(?:(?:0[1-9]|1[0-2])"
            title="Enter a date in this format YYYY-DD-MM"
          />
          <button type="submit" onClick={this.submitData}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default home;
