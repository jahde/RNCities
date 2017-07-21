/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import {
  AppRegistry,
} from 'react-native';

import rootReducer from './app/reducers';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import Routes from './app/routes';

import thunk from 'redux-thunk';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk), 
);

const App = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);

AppRegistry.registerComponent('RNCities', () => App);
