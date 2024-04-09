import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import MusicScreen from './screens/MusicScreen';
import LocationScreen from './screens/LocationScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const icons: { [key: string]: string } = {
  Home: 'home',
  Favorites: 'heart',
  Music: 'music',
  Location: 'map-marker',
};

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              const iconName = icons[route.name];
              return (
                <MaterialCommunityIcons
                  name={iconName as any}
                  size={size}
                  color={color}
                />
              );
            },
            tabBarActiveTintColor: '#6156E2',
            tabBarInactiveTintColor: '#8E8E8E',
            tabBarStyle: {
              borderTopLeftRadius: 40,
              borderTopRightRadius: 40,
              position: 'absolute',
              shadowOffset: { width: 0, height: -10 },
              bottom: 0,
              backgroundColor: '#0A071E',
              shadowColor: 'white',
              shadowOpacity: 0.07,
              shadowRadius: 5,
              borderTopWidth: 0,
              width: '100%',
              height: '10%',
            },
            tabBarOptions: {
              showLabel: false,
            },
          })}
        >
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Tab.Screen name="Favorites" component={FavoritesScreen} />
          <Tab.Screen name="Music" component={MusicScreen} />
          <Tab.Screen name="Location" component={LocationScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A071E',
  },
});
