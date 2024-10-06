import * as React from 'react';
import { View, Text, StyleSheet, Pressable, ImageBackground, Image } from 'react-native';
import userLogin from '../spotify-api/auth.js';
import background from '../assets/images/bgImage.jpg';
import wave from '../assets/images/waveLight.png';
import { useNavigation } from '@react-navigation/native';



const WelcomeScreen = () => {
    return (
        <ImageBackground
            source={background}
            style={styles.background}
        >
            <View style={styles.container}>
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
        position: 'absolute',
        top: 2
    },
    cta: {
        position: 'absolute',
        top: 100,
        color: '#2F4858',
        fontWeight: 'bold',
        letterSpacing: 3,
        paddingHorizontal: 10,
        textAlign: 'center',
        fontFamily: 'lexend-era'
    },
    buttonContainer: {
        marginTop: 130,
        padding: 10,
        paddingHorizontal: 50,
        borderRadius: 15,
        borderWidth: 2,
        borderColor: '#597ED6',
        backgroundColor: 'white',
        // Shadow for iOS
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.3,
        shadowRadius: 10,
        // Elevation for Android
        elevation: 5,
      },
      buttonText: {
        color: '#000',
        fontSize: 14,
        fontFamily: 'metrophobic'
        //fontWeight: 'bold'
      }
});

export default WelcomeScreen;