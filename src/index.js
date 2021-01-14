import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import configStore from './store';
import { Provider } from 'react-redux';

// defining the store

const store = configStore();

// telling react dom to render the App component as the root html element and wrapping the App inside the Provider, so that the App including all its components get access to the store via connect

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,

  document.getElementById('root')
);
