// importing React, ReactDOM, index styling and the App component

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// telling react dom to render the App component as the root html element

ReactDOM.render(

  <React.StrictMode>
    <App />
  </React.StrictMode>,

  document.getElementById('root')

);