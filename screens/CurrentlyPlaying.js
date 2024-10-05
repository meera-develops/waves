import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';


const CurrentlyPlaying = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>YOUR TIDE POOL</Text>
        <Text style={styles.text}>user_name</Text>
        <Text style={styles.text}>Your rating</Text>
      </View>
    );
  };


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 50,
      backgroundColor: '#FCDDBC',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
    },
    text: {
      color: 'black'
    }
  });

  export default CurrentlyPlaying;