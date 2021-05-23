import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from 'Reducers';

import App from 'Components/App';

ReactDOM.render(
  <React.StrictMode>
  <Provider store={createStore(reducers, {})}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
