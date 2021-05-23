import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from 'Root';

import App from 'Components/App';

ReactDOM.render(
  <React.StrictMode>
  <Root>
    <App />
  </Root>
  </React.StrictMode>,
  document.getElementById('root')
);
