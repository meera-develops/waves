import * as React from 'react';
<<<<<<< HEAD
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
=======
import { View, Text, StyleSheet, Pressable, ImageBackground, Image } from 'react-native';
>>>>>>> 465307b9e03c3e2b0bb4fa13a4ae05c0a4a63c5c
import userLogin from '../spotify-api/auth.js';
import background from '../assets/images/bgImage.jpg';

const WelcomeScreen = () => {
    return (
        <ImageBackground
            source={background}
            style={styles.background}
        >
            <View style={styles.container}>
<<<<<<< HEAD

                <TouchableOpacity onPress={() => userLogin()} style={styles.buttonContainer}>
                <Text style={styles.buttons}>
                    Log in with Spotify
=======
                <Image 
                    source={wave}
                    style={styles.wave}
                />
                <Text style={styles.cta}>
                    Ready to dive into the deep end?
                </Text>
                <Pressable onPress={() => userLogin()} style={styles.buttonContainer}>
                <Text style={styles.buttonText}>
                    Log in
>>>>>>> 465307b9e03c3e2b0bb4fa13a4ae05c0a4a63c5c
                </Text>
                </Pressable>
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
