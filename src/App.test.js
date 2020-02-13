import React from 'react';
import ReactDOM from 'react-dom';
import { IntlProvider } from 'react-intl';
import App from './App';
import { initializePhraseAppEditor } from 'react-intl-phraseapp';

var config = {
  projectId: '00453ba3c0763049c73f0a04ed067e66',
  phraseEnabled: true,
  prefix: '[[__',
  suffix: '__]]'
}

initializePhraseAppEditor(config);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <IntlProvider locale="en">
      <App />
    </IntlProvider>,
    div);
});
