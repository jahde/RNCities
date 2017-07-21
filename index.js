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

import createSagaMiddleware from 'redux-saga';
import CitySaga from './app/citySaga';

const sagaMiddleWare = createSagaMiddleware();

const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleWare),
);
sagaMiddleWare.run(CitySaga);

const App = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);

AppRegistry.registerComponent('RNCities', () => App);
