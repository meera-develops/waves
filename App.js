import * as React from 'react';
//import { Text, View } from 'react-native';
import { StyleSheet } from 'react-native';
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
    <View style={styles.container}>
      <ImageBackground
        source={heroScreenImg}
        style={styles.heroImg}
      >
        <Text style={styles.heroText}>WAVE</Text>

        <Image
          source={turntable}
          style={styles.turntableImg}
        />

        <Text style={styles.header}>
          Find your <Text style={styles.subtitle}> W a v e</Text>
        </Text>

        <TouchableOpacity onPress={handleSpotifyLogin} style={styles.buttonContainer}>
          <Text style={styles.buttons}>
            Login with Spotify
          </Text>
        </TouchableOpacity>
      </ImageBackground>
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
    color: 'blue',
  }
});
=======
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Welcome" component={WelcomeScreen} />
        <Tab.Screen name="Home" component={HomeScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
>>>>>>> d21cd4d (app.js)
