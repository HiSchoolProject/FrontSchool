import React, { Component } from 'react';
//import Translate from 'react-translate-component';

class Accounts extends Component {
  async getAccounts(id) {
    const url = "http://backschool:8080/api/v1/accounts/accounts/";

    const fetchData = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }

    const res = await fetch(url, fetchData);
    const obj = await res.json();
    return obj;
  }

  constructor(props) {
    super(props);
    this.state = {
      accounts: null
    }
  }

  async componentDidMount() {
    this.setState({
      accounts: await this.getAccounts()
    });
  }

  render() {
    if (this.state.accounts === null) {
      return (<div>Loading...</div>);
    } else {
      console.log(this.state.accounts);
      const accounts = Object.keys(this.state.accounts.results).map((key) =>
        <li key={key}>{this.state.accounts.results[key].user.username}</li>
      );
      return (
        <ul>
          {accounts}
        </ul>
      );
    }
  }
}

export default Accounts;
