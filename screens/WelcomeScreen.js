import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import userLogin from '../spotify-api/auth.js';
import background from '../assets/images/bgImage.jpg';



const WelcomeScreen = () => {
    return (
        <ImageBackground
            source={background}
            style={styles.background}
        >
            <View style={styles.container}>

                <TouchableOpacity onPress={() => userLogin()} style={styles.buttonContainer}>
                <Text style={styles.buttons}>
                    Log in with Spotify
                </Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>

    );
};

const styles = StyleSheet.create({
    container: {
      marginTop: 50,
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
    wave: {
        alignSelf: 'center'
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
