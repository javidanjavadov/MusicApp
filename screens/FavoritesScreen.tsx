// FavoritesScreen.js
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const FavoritesScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Favorites Screen</Text>
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

export default FavoritesScreen;
