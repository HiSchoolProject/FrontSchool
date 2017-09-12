import React, { Component } from 'react';
import { Router, Route } from 'react-router';
import { Link } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import counterpart from 'counterpart';
import Translate from 'react-translate-component';

import setEnglishContent from './Content/en';
//import setFrenchContent from './Content/fr';
import Home from './Home';
import Accounts from './Accounts';

// This component allows the visitor to switch language
class LocaleSwitcher extends Component {
  handleChanges(e) {
    counterpart.setLocale(e.target.value);
  }

  render() {
    return (
      <ul>
        <li><button value='en' onClick={this.handleChanges}>EN</button></li>
        {/*<li><button value='fr' onClick={this.handleChanges}>FR</button></li>*/}
      </ul>
    );
  }
}

// This is the main component, containing title, menu, and router
class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {history: createBrowserHistory()};
  }

  render() {
    // Import actual content
    setEnglishContent();
    //setFrenchContent();

    return (
      <Router history={this.state.history}>
        <div>
          <main>
            <div>
              <div>
                <LocaleSwitcher />
                <ul>
                  <li><Translate component={Link} to="/" content='menu.home' /></li>
                  <li><Translate component={Link} to="/accounts" content='menu.accounts' /></li>
                </ul>
              </div>
            </div>

            <Route exact path="/" component={Home} />
            <Route exact path="/accounts" component={Accounts} />
          </main>

        </div>
      </Router>
    );
  }
}

export default Layout;
