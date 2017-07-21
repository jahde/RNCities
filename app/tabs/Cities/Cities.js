import React from 'react';
import { Image, ScrollView, Text } from 'react-native';

import { connect } from 'react-redux';
import { ListItem } from 'react-native-elements';

const Cities = (props) => {
  const cities = Object.values(props.cities);
  return (
    <ScrollView>
      {
        cities.map((item, index) => (
          <ListItem title={item.name} key={index} />
        ))
      }
    </ScrollView>
  )
}

Cities.navigationOptions = {
  headerTitle: <Image
    resizeMode='contain'
    style={{ height: 32, width: 120 }}
    source={require('../../assets/citieslogo.png')} />
}

function mapStateToProps(state, ownProps) {
  return {
    cities: state.cityReducer.cities
  }
}

export default connect(
  (state) => {
    return {
      cities: state.cityReducer.cities
    }
  }
)(Cities);
