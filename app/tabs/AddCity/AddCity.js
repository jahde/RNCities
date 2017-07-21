import React from 'react';
import {
  Image,
  TextInput,
  View,
  Text,
  StyleSheet
} from 'react-native';
import { connect } from 'react-redux';
import { addCity } from '../../actions';

import {
  Button
} from 'react-native-elements';

class AddCity extends React.Component {
  state = {
    formValues: {
      cityName: '',
      countryName: '',
    }
  }
  onChangeText = (key, value) => {
    this.setState({
      formValues: {
        ...this.state.formValues,
        [key]: value,
      }
    })
  }
  addCity = () => {
    this.props.dispatchAddCity({
      name: this.state.formValues.cityName,
      country: this.state.formValues.countryName,
    });
    this.setState({
      formValues: {
        cityName: '',
        countryName: '',
      }
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            value={this.state.formValues.cityName}
            onChangeText={value => this.onChangeText('cityName', value)}
            style={styles.input}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            value={this.state.formValues.countryName}
            onChangeText={value => this.onChangeText('countryName', value)}
            style={styles.input}
          />
        </View>
        <Button
          title="Add City"
          onPress={this.addCity}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#9c27b0',
    flex: 1,
    justifyContent: 'center',
    padding: 15,
  },
  input: {
    height: 50,
    backgroundColor: '#ededed',
    padding: 9,
  },
  inputContainer: {
    marginBottom: 20,
  },
})

const mapDispatchToProps = {
  dispatchAddCity: (city) => addCity(city),
}

export default connect(null, mapDispatchToProps)(AddCity);
