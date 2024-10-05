import * as React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import background from '../assets/images/bgImage.jpg';


const CurrentlyPlaying = () => {
    return (
      <ImageBackground
        source={background}
        style={styles.background}
      >
        <View style={styles.container}>
          <Text>This will be the currently playing screen</Text>
        </View>

      </ImageBackground>
    );
  };


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    background: {
      flex: 1,
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
      justifyContent: 'center',
    },
    text: {
      color: 'black'
    }
  });

  export default CurrentlyPlaying;