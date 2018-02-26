import React, { Component } from 'react';
import {FormattedMessage} from 'react-intl-phraseapp';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>{this.props.translate("welcome.headline")}</h2>
        </div>
        <p className="App-intro">
          <FormattedMessage
                    id="welcome.text"
                    defaultMessage={`We hope this example will help you integrate PhraseApp into your react app using react-intl`}
                />
        </p>
      </div>
    );
  }
}

export default App;
