// LocationScreen.js
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const LocationScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Location Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default LocationScreen;
