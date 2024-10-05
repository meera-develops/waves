import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import userLogin from '../spotify-api/auth.js';




const WelcomeScreen = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => userLogin()} style={styles.buttonContainer}>
              <Text style={styles.buttons}>
                Log in with Spotify
              </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      marginTop: 50,
    },
    buttonContainer: {
        top: 140,
        backgroundColor: 'white',
        borderColor: '#c8acd6',
        padding: 15,
        marginHorizontal: 25,
        marginVertical: 20,
        alignItems: 'center',
        borderRadius: 20,
        borderWidth: 10,
      },
      buttons: {
        color: '#433D8B',
        fontSize: 18,
        fontWeight: 'bold'
      }
});

export default WelcomeScreen;
