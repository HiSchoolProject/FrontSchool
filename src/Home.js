import React, { Component } from 'react';
import Translate from 'react-translate-component';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <Translate component='h2' content="home.title" />
        <Translate component='p' content="home.subtitle" />
      </div>
    );
  }
}

export default Home;
