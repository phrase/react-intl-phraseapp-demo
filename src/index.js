import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {IntlProvider} from 'react-intl';
import './index.css';
import {initializePhraseAppEditor} from 'react-intl-phraseapp'

var config = {
  projectId: '<YOUR_PROJECT_ID>',
  phraseEnabled: true,
  prefix: '[[__',
  suffix: '__]]'
}

initializePhraseAppEditor(config);

const messages = {
  'welcome.headline': 'This headline is visible when "phraseEnabled" config option is set to false'
};


ReactDOM.render(
  <IntlProvider locale="en" messages={messages}>
    <App />
  </IntlProvider>,
  document.getElementById('root')
);
