import * as React from 'react';
//import { Text, View } from 'react-native';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import WelcomeScreen from './screens/WelcomeScreen';
import HomeScreen from './screens/HomeScreen';


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#87bcde', // Color when active
          tabBarInactiveTintColor: '#fff', // Color when inactive
          tabBarStyle: {
            backgroundColor: '#2f4858', // Background color of the tab bar
          },
          headerTitleAlign: "center", // Center the title
          //tabBarStyle: { display: 'none' }, // Hide tab bar on Welcome screen
        }}
      >
        <Tab.Screen 
        name="Welcome" 
        component={WelcomeScreen} 
        options={{
          title: "Waves",
          headerStyle: {
            backgroundColor: "#fcddbc",
          },
          headerTitleStyle: {
            color: "#2f4858",
            textTransform: 'uppercase',
            letterSpacing: 5,
            fontSize: 30
          },
          headerTintStyle: { fontWeight: 'bold'},
        }}
        />
        <Tab.Screen name="Home" component={HomeScreen}
        options={{
          headerStyle: {
            backgroundColor: "#fcddbc",
          },
          headerTintColor: "#2f4858",
          headerTintStyle: { fontWeight: 'bold'},
        }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  bottomTab: {
    color: '#2f4858'
  }
})
