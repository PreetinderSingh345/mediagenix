import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import logger from 'redux-logger';

// defining the store

let store = null;

// exporting the configStore function, where we define and return the store

export default function configStore() {
  store = createStore(rootReducer, applyMiddleware(logger, thunk));
  return store;
}
