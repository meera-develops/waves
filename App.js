import * as React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import WelcomeScreen from './screens/WelcomeScreen';
import HomeScreen from './screens/HomeScreen';
import Callback from './screens/Callback';
import CurrentlyPlaying from './screens/CurrentlyPlaying';

SplashScreen.preventAutoHideAsync();


const linking = {
  prefixes: ['http://localhost:8081', 'yourapp://'], // Add your app's URI prefix here
  config: {
    screens: {
      Welcome: 'welcome',
      Home: 'home',
      Callback: 'callback', // Ensure the callback route matches your expectation
      CurrentlyPlaying: 'currently-playing',
      // Define other screens as needed
    },
  },
};


const Tab = createBottomTabNavigator();

export default function App() {
  const [loaded, error] = useFonts({
    'lexend-era': require('./assets/fonts/Lexend_Exa/static/LexendExa-Light.ttf'),
    'metrophobic': require('./assets/fonts/Metrophobic/Metrophobic-Regular.ttf')
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }



  return (
    <NavigationContainer linking={linking}>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#87bcde',
          tabBarStyle: {
            backgroundColor: '#2f4858',
          },
          headerTitleAlign: "center",
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
             fontFamily: 'lexend-era',
             textTransform: 'uppercase',
             letterSpacing: 5,
             fontSize: 30,
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
        <Tab.Screen name="Currently Playing" component={CurrentlyPlaying}
        options={{
          headerStyle: {
            backgroundColor: "#FCDDBC"
          },
          headerTintColor: "#2f4858",
          headerTintStyle: {fontWeight: "bold"},
        }} />
        <Tab.Screen name="Callback" component={Callback} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  bottomTab: {
    color: '#2f4858'
  }
})
