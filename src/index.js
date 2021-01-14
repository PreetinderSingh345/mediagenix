import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import configStore from './store';

const store = configStore();
console.log('store', store);
console.log('state', store.getState());

// telling react dom to render the App component as the root html element

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,

  document.getElementById('root')
);
