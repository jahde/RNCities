import React from 'react';

import { StackNavigator } from 'react-navigation';

import City from './City';
import Cities from './Cities';

const RouteConfig = {
  Cities: { screen: Cities },
  City: { screen: City },
}

const NavigatorConfig = {
  initialRouteName: 'Cities',
  navigationOptions: {
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: '#9c27b0',
    }
  }
}

const CityNavigator = StackNavigator(RouteConfig, NavigatorConfig);

export default CityNavigator;
