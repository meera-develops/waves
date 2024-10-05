import * as React from 'react';
//import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import WelcomeScreen from './screens/WelcomeScreen';
import HomeScreen from './screens/HomeScreen';
import Callback from './screens/Callback';

const linking = {
  prefixes: ['http://localhost:8081', 'yourapp://'], // Add your app's URI prefix here
  config: {
    screens: {
      Welcome: 'welcome',
      Home: 'home',
      Callback: 'callback', // Ensure the callback route matches your expectation
      // Define other screens as needed
    },
  },
};


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer linking={linking}>
      <Tab.Navigator>
        <Tab.Screen name="Welcome" component={WelcomeScreen} />
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Callback" component={Callback} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
