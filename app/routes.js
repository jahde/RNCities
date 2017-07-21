import React from 'react';
import { TabNavigator } from 'react-navigation';
import { Image } from 'react-native';

import CityNavigator from './tabs/Cities/CityNavigator';
import AddCity from './tabs/AddCity/AddCity';

const RouteConfig = {
  CityNavigator: {
    screen: CityNavigator,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={require('./assets/cityicon.png')}
          style={{ tintColor, width: 28, height: 28 }}
        />
      ),
    }
  },
  AddCity: {
    screen: AddCity,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={require('./assets/addicon.png')}
          style={{ tintColor, width: 28, height: 28 }}
        />
      ),
    }
  },
};

const NavigatorConfig = {
  tabBarPosition: 'bottom',
  initialRouteName: 'CityNavigator',
  tabBarOptions: {
    inactiveTintColor: '#666',
    activeTintColor: '#9c27b0',
    showIcon: true,
  }
}

const TabNavigation = TabNavigator(RouteConfig, NavigatorConfig);

export default TabNavigation;
