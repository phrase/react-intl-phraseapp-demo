import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {IntlProvider} from 'react-intl';
import './index.css';
import {initializePhraseAppEditor} from 'react-intl-phraseapp'

var config = {
  projectId: '<YOUR_PROJECT_ID>'
}

initializePhraseAppEditor(config, true);

ReactDOM.render(
  <IntlProvider locale="en">
    <App />
  </IntlProvider>,
  document.getElementById('root')
);
