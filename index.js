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
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Routes from './app/routes';

const store = createStore(rootReducer);

const App = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);

AppRegistry.registerComponent('RNCities', () => App);
