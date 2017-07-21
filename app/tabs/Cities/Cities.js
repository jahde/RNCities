import React from 'react';
import { Image, ScrollView, Text } from 'react-native';

import { connect } from 'react-redux';
import { ListItem } from 'react-native-elements';
import { fetchFromApi } from '../../actions';

class Cities extends React.Component {
  static navigationOptions = {
    headerTitle: <Image
      resizeMode='contain'
      style={{ height: 32, width: 120 }}
      source={require('../../assets/citieslogo.png')} />
  }
  componentDidMount() {
    this.props.dispatchFetchFromApi()
  }
  render() {
    const cities = Object.values(this.props.cities);
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
}

function mapStateToProps(state, ownProps) {
  return {
    cities: state.cityReducer.cities
  }
}

const mapDispatchToProps = {
  dispatchFetchFromApi: fetchFromApi,
}

export default connect(mapStateToProps, mapDispatchToProps)(Cities);
