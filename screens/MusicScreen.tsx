// MusicScreen.js
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const MusicScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Music Screen</Text>
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

export default MusicScreen;
