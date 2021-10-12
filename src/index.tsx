import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Routes from 'Routes';

ReactDOM.render(
  <React.StrictMode>
    <App>
      <Routes />
    </App>
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
