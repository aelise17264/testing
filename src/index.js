import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Root from 'Root';

import App from 'Components/App';

ReactDOM.render(
  <React.StrictMode>
  <Root>
  <BrowserRouter>
    <Route path="/" component={App} />
    </BrowserRouter>
  </Root>
  </React.StrictMode>,
  document.getElementById('root')
);
