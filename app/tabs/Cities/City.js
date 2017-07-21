import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

const City = () => (
  <View style={styles.container}>
    <Text>Hello from City</Text>
  </View>
);

export default City;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
